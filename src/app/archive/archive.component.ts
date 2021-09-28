import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MoviaServiceService } from '../services/movia-service.service';
import { Bus, BusList, Request } from '../generated/MoviaMobilEndPiontGrpc_pb';



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

  /*--------------SimpleDataObjects--------------*/
  public dataSource: Array<Bus> = new Array<Bus>();
  /*--------------DataTable Values--------------*/
  displayedColumns = ["Id", "name", "make", "driver", "routeid", "totaltbuscap", "currentpaxcont"];
  matdatasource = new MatTableDataSource<Bus>(this.dataSource);
  busen: Bus = new Bus();
  dataSourceBuss: Array<Bus> = new Array<Bus>();
  matdatasourceBuss = new MatTableDataSource<Bus>(this.dataSourceBuss);
  Buss: Array<Bus> = new Array<Bus>();
  expandingelement: Bus = new Bus();
  isExpansionDetailRow = (id: number, row: any | Bus) => this.isExpansionDetailRows(id, row);

  constructor(private dataserve: MoviaServiceService) {
    this.dataserve.GetAllBuss();

    this.dataserve.BusList$.subscribe(x => {
      this.matdatasource.data = [];
      this.matdatasourceBuss.data = [];
      x.forEach(bus => {

        if (bus.getName.length! < 0) {
          this.matdatasourceBuss.data.push(bus)
          this.matdatasourceBuss._updateChangeSubscription();
        }
      });
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

CreateBus(){
this.dataserve.CreateBus(new Bus());
}
  /**
   * This sets up the sorting logic for the table.
   *  displayedColumns = ["id", "name", "make", "driver", "routeid", "totaltbuscap", "currentpaxcont", "lat", "lon"];
   */
  onsortChange() {
    this.matdatasource.sortingDataAccessor = (item, property) => {
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
    // console.log("Cheaking if row can be expanded");
    return true;
  }

  GetAllBuss(element: any | Bus) {

  }
  DeleteBus(element: Bus | Bus) {

  }
  GetBusInfomation(element: Bus | any): Bus {
    let testBus = this.busen;
    return testBus;
  }

  geList(element: Bus): Array<Bus> {

    return this.Buss;
  }


}
