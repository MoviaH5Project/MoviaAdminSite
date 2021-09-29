import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bus } from 'src/app/generated/MoviaMobilEndPiontGrpc_pb';
import { LoadingService } from 'src/app/loading.service';
import { EditBusModalComponent } from '../EditBusModal/EditBusModal.component';

@Component({
  selector: 'app-editbusForm',
  templateUrl: './editbusForm.component.html',
  styleUrls: ['./editbusForm.component.css']
})
export class EditbusFormComponent {
  @Input('busid') busId!: Bus;

  loading$ = this.spinner.loading$;
  constructor(private dilog: MatDialog, private spinner: LoadingService) {
  }

  testDialog() {
    this.dilog.open(EditBusModalComponent, {
      data: {
        busid: this.busId
      }

    });

  }
}
