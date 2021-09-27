import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';
import { Bus, BusList, Request } from '../generated/MoviaMobilEndPiontGrpc_pb';
import { DatabaseGrpcService } from '../generated/MoviaMobilEndPiontGrpc_pb_service';

@Injectable({
  providedIn: 'root'
})
export class MoviaServiceService {

  hostAddress = "http://193.106.164.115:5000";
  BusInfomation$: BehaviorSubject<Bus> =
    new BehaviorSubject<Bus>(new Bus());
  BusList$: BehaviorSubject<Bus[]> = new BehaviorSubject<Bus[]>(new Array<Bus>());

  constructor() { }

  GetBus(busId: number, busToGet: Request) {
    var t = busToGet;
    t.setId(busId);
    grpc.invoke(DatabaseGrpcService.GetBus, {
      request: t,
      host: this.hostAddress,
      onMessage: (Message: Bus) => {
        console.log('entris change: ' + Message.getName());
        this.BusInfomation$.next(Message);
      },
      onEnd: (res) => { console.log() },
    });
  }

  CreateBus(newBus: Bus) {

    grpc.invoke(DatabaseGrpcService.CreateBus, {
      request: newBus,
      host: this.hostAddress,
      onMessage: (Message: Response | any) => {
        console.log('entris change: ' + (Message as Response));
      },
      onEnd: (res) => { console.log() },
    });
  }

  GetAllBuss() {
    grpc.invoke(DatabaseGrpcService.GetAllBusses, {
      request: new Request(),
      host:this.hostAddress,
      onMessage: (Messagse:BusList) =>{
        console.log("BusList First Bus Name: " + Messagse.getBussesList()[0].getName());
        this.BusList$.next(Messagse.getBussesList());
      },onEnd:(res) => {}
    });
  }

}
