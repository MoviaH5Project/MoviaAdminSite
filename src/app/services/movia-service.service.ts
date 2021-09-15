import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';
import { Bus, BusRequest } from '../generated/MoviaMobilEndPiontGrpc_pb';
import { BusGrpcService } from '../generated/MoviaMobilEndPiontGrpc_pb_service';

@Injectable({
  providedIn: 'root'
})
export class MoviaServiceService {

  hostAddress = "0.0.0.0";
  BusInfomation$: BehaviorSubject<Bus> =
    new BehaviorSubject<Bus>(new Bus());
  constructor() { }

  GetBusInfo(busId: string, busToGet: BusRequest) {

    grpc.invoke(BusGrpcService.GetBusInfo, {
      request: busToGet,
      host: this.hostAddress,
      onMessage: (Message: Bus) => {
        console.log('entris change: ' + Message.getName());
        this.BusInfomation$.next(Message);
      },
      onEnd: (res) => { console.log() },
    });
  }

}
