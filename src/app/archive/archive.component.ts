import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MoviaServiceService } from '../services/movia-service.service';
import { Bus, BusList, Request, Route, Stop } from '../generated/MoviaMobilEndPiontGrpc_pb';
import { LoadingService } from '../loading.service';



@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed, void => expanded', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArchiveComponent implements OnInit, OnDestroy, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent();

  /*--------------ViewChilds--------------*/
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild("mattable", { read: MatSort }) sort!: MatSort;

  @ViewChild("tableDone", { read: MatSort }) sortDone!: MatSort;

  @ViewChild("tableDone") tabledone!: MatTable<Bus>;
  @ViewChild("paginatorDone") paginatorDone!: MatPaginator;

  /*----- spinner ----- */
  loading$ = this.spinner.loading$;
  /*--------------SimpleDataObjects--------------*/

  public dataSource: Array<Bus> = new Array<Bus>();
  /*--------------DataTable Values--------------*/
  displayedColumns = ["Id", "name", "make", "driver", "routeid", "totaltbuscap", "currentpaxcont", "DeleteRow"];
  //First level tabel
  matdatasource = new MatTableDataSource<Bus>(this.dataSource);
  stopList = Array<Stop>();
  busen: Bus = new Bus();

  dataSourceBuss: Array<Bus> = new Array<Bus>();
  matdatasourceBuss = new MatTableDataSource<Bus>(this.dataSourceBuss);
  Buss: Array<Bus> = new Array<Bus>();
  expandingelement: Bus = new Bus();
  routeLocal: Route = new Route();
  isExpansionDetailRow = (id: number, row: any | Bus) => this.isExpansionDetailRows(id, row);

  constructor(private dataserve: MoviaServiceService, private spinner: LoadingService) {
    this.spinner.show();

    this.dataserve.GetAllBuss();
    this.dataserve.BusList$.subscribe(x => {
      this.matdatasource.data = x;
      this.matdatasourceBuss.data = [];

      x.forEach(bus => {
        this.matdatasourceBuss.data.push(bus);
        this.matdatasourceBuss._updateChangeSubscription();
      });
      this.spinner.hide();
    });
  }

  ngAfterViewInit(): void {
    this.matdatasource.paginator = this.paginator;
    this.matdatasource.sort = this.sort;
    this.onsortChange();

    this.matdatasourceBuss.sort = this.sortDone;
    this.matdatasourceBuss.paginator = this.paginatorDone;
    this.onSortDoneChange();
  }

  ngOnDestroy(): void {
    this.dataserve.BusInfomation$.unsubscribe();
  }

  ngOnInit() {

  }

  GetAllStops(element: any) {
    // this.dataserve.GetAllStops(element);
    var t = element as Bus;
    var s = new Request();
    s.setId(t.getId());
    this.dataserve.GetRoute(s);
  }

  /**
   * This apply a filter to the matdatatable.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatasource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterDone(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatasourceBuss.filter = filterValue.trim().toLowerCase();
  }

  /**
   * This sets up the sorting logic for the table.
   *  displayedColumns = ["id", "name", "make", "driver", "routeid", "totaltbuscap", "currentpaxcont", "lat", "lon"];
   */
  onsortChange() {
    this.matdatasource.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'Id': switchValue = item.getId().toString(); break;
        case 'name': switchValue = item.getName(); break;
        case 'make': switchValue = item.getMake(); break;
        case 'driver': switchValue = item.getDriver(); break;
      }
      return switchValue;
    };

  }

  onSortDoneChange() {
    this.matdatasourceBuss.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'id': switchValue = item.getName(); break;
        case 'name': switchValue = item.getId().toString(); break;
        case 'make': switchValue = item.getMake(); break;
        case 'driver': switchValue = item.getDriver(); break;
      }
      return switchValue;
    };

  }

  isExpansionDetailRows(i: number, row: Bus): boolean {
    console.log("Cheaking if row can be expanded");
    return true;
  }

  DeleteBus(element: Bus | Bus) {
    var request = new Request();
    request.setId(element.getId());
    this.dataserve.DeleteBus(request);
  }

  GetBusInfomation(element: Bus | any): Bus {
    let testBus = this.busen;
    return testBus;
  }
  CreateBus() { }

  GetStopList(): Array<Stop> {
    return this.stopList;
  }

  GetRoute(element: Bus): Route {
    var requset = new Request();
    var tempbus = element;
    requset.setId(tempbus.getId());
    return this.dataserve.GetRoute(requset);
  }

  EditBus(element: Bus) {
    var tempbus = element;
    tempbus.setDriver("Martin");
    this.dataserve.EditBus(tempbus);
  }

}
