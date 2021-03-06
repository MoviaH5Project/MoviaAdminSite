import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Bus } from '../../generated/MoviaMobilEndPiontGrpc_pb';
import { LoadingService } from '../../loading.service';
import { MoviaServiceService } from '../../services/movia-service.service';

@Component({
  selector: 'app-createbusmodal',
  templateUrl: './createbusmodal.component.html',
  styleUrls: ['./createbusmodal.component.css']
})
export class CreatebusmodalComponent implements OnInit {

  newBusFormcontroll = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);
  newmakeFormcontroll = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);
  newPaxCapFormcontroll = new FormControl('', [
    Validators.required,
    Validators.max(50),
  ]);

  newBusGroups = new FormGroup({
    busName:this.newBusFormcontroll,
    paxcap:this.newPaxCapFormcontroll,
    make:this.newmakeFormcontroll

  })


  constructor(private dataservice:MoviaServiceService,private dialog:MatDialog,private spinner:LoadingService) { }

  ngOnInit(): void {
  }

  CloseDialog(){
    this.dialog.closeAll()
  }

  getErrorMessage() {

    if (this.newBusFormcontroll.hasError('required')) {
      return 'indtast et bus navn';
    } else if (this.newBusFormcontroll.hasError('minlength')) {
      return 'et bus navn er normalt over 4 Karaktere langt'
    } else if (this.newBusFormcontroll.hasError('maxlength')) {
      return 'et bus navn er normalt ikke over 25 Karaktere lang.'
    }
    // return this.newBusFormcontroll.hasError('pattern') ? 'noget gik galt prøv igen' : '';
    // if (this.newPaxCapFormcontroll.hasError('required')) {
    //   return 'indtast et bus capiticty tal';
    // } else if (this.newPaxCapFormcontroll.hasError('minlength')) {
    //   return 'en bus kan normalt ikke inholder mindre end 1 person'
    // } else if (this.newPaxCapFormcontroll.hasError('maxlength')) {
    //   return 'en bus kan normalt ikke holde flere end 50 passagse'
    // }
    // return this.newBusFormcontroll.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

  AddNewBus(titel:string,busdriver:string,paxcap:string){
    if(titel.length >= 4){
      let d = new Bus();

      d.setId(1);
      d.setDriver(busdriver);
      d.setName(titel);
      d.setRouteId(1);
      d.setTotalBusCapacity(Number.parseInt(paxcap));

      this.dataservice.CreateBus(d);
      this.dialog.closeAll();
      this.spinner.show();


      //console.log(Date.now().toLocaleString('en-GB'));

    }
  }
}

