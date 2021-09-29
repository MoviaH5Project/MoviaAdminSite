import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatebusmodalComponent } from '../createbusmodal/createbusmodal.component';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-add-bus-form',
  templateUrl: './add-bus-form.component.html',
  styleUrls: ['./add-bus-form.component.css']
})
export class AddBusFormComponent implements OnInit {

  @Input('projectid') projectid!:number
  loading$ = this.spinner.loading$;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit(): void {
  }

  testDialog() {
    this.dilog.open(CreatebusmodalComponent,{
      data:{
        projectid: this.projectid
      }

    });
  }

}
