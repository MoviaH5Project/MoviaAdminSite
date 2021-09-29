import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { BehaviorSubject, Observable, of, Subject, zip } from 'rxjs';
import { Bus, BusList, Request, Route, RouteList, Stop, Response } from '../generated/MoviaMobilEndPiontGrpc_pb';
import { WebsiteGrpcEndpoint } from '../generated/MoviaMobilEndPiontGrpc_pb_service';

@Injectable({
  providedIn: 'root'
})
export class MoviaServiceService {

  hostAddress = "http://193.106.164.115:5100";

  /*------ observables ------ */
  BusInfomation$: BehaviorSubject<Bus> = new BehaviorSubject<Bus>(new Bus());
  BusList$: BehaviorSubject<Bus[]> = new BehaviorSubject<Bus[]>(new Array<Bus>());
  stopsList$: BehaviorSubject<Stop[]> = new BehaviorSubject<Stop[]>(new Array<Stop>());
  Busroute$: BehaviorSubject<Route> = new BehaviorSubject<Route>(new Route());
  BusListTest$: BehaviorSubject<Bus> = new BehaviorSubject<Bus>(new Bus());
  /*------ End of observables ------ */


  constructor() { }
/*------ Grpc calls ------ */
  GetBus(busId: number, busToGet: Request) {
    var t = busToGet;
    t.setId(busId);
    grpc.invoke(WebsiteGrpcEndpoint.GetBus, {
      request: t,
      host: this.hostAddress,
      onMessage: (Message: Bus) => {
        console.log('entris change: ' + Message.getName());
        this.BusInfomation$.next(Message);
      },
      onEnd: (res) => { console.log() },
    });
  }

  /**
   *
   * @param newBus the bus to be created
   * this sends a requset to create a bus in the database.
   */
  CreateBus(newBus: Bus) {
    grpc.invoke(WebsiteGrpcEndpoint.CreateBus, {
      request: newBus,
      host: this.hostAddress,
      onMessage: (Message: Response | any) => {
        console.log('entris change: ' + Message);
      },
      onEnd: (res) => { console.log() },
    });
  }

  /**
   * this gets all routes
   * note this saves the return value in a observable callad RouteList$.
   */
  GetAllRoutes() {
    grpc.invoke(WebsiteGrpcEndpoint.GetAllRoutes, {
      request: new Request(),
      host: this.hostAddress,
      onMessage: (Message: Response | any) => {
        console.log('entris change: ' + (Message as RouteList).getRoutesList()[0].getName());

      },
      onEnd: (res) => { },
    });
  }

  /**
   * gets all bussed
   * note that this saves the return value in a observalbe called BusList$.
   */
  GetAllBuss() {
    grpc.invoke(WebsiteGrpcEndpoint.GetAllBusses, {
      request: new Request(),
      host: this.hostAddress,
      onMessage: (Messagse: BusList) => {
        console.log("BusList First Bus Name: " + Messagse.getBuslistList()[0].getName());
        this.BusList$.next(Messagse.getBuslistList());
      }, onEnd: (res) => { }
    });
  }

  /**
   *
   * @param newroute the new route to be inserted
   *this creates a new route.
   */
  CreateRoute(newroute: Route) {
    grpc.invoke(WebsiteGrpcEndpoint.CreateRoute, {
      request: newroute,
      host: this.hostAddress,
      onMessage: (Messagse: Response | any) => {
        console.log("BusList First Bus Name: " + Messagse);
      }, onEnd: (res) => { }
    });
  }

/**
 *
 * @param busDelete the id of the bus to delete
 * this delete/removes a bus from the database.
 */
  DeleteBus(busDelete: Request) {
    grpc.invoke(WebsiteGrpcEndpoint.DeleteBus, {
      request: busDelete,
      host: this.hostAddress,
      onMessage: (Messagse: Response | any) => {
        console.log("BusList First Bus Name: " + Messagse);
      }, onEnd: (res) => { }
    });
  }
  /**
   *
   * @param routeid the route id to get all stops of.
   * this returns all the stops on one route
   */
  GetAllStops(routeid: Request) {
    grpc.invoke(WebsiteGrpcEndpoint.GetAllStops, {
      request: routeid,
      host: this.hostAddress,
      onMessage: (Messagse: RouteList | any) => {
        this.stopsList$.next(Messagse);
        console.log("BusList First Bus Name: " + Messagse);
      }, onEnd: (res) => { }
    });
  }

  /**
   *
   * @param busid the routeid to look for a route on.
   * the id is used to look up a route in the database.
   */
  GetRoute(busid: Request):Route {
    var t = new Route();
    grpc.invoke(WebsiteGrpcEndpoint.GetRoute, {
      request: busid,
      host: this.hostAddress,
      onMessage: (Messagse: Route | any) => {
        // this.Busroute$.next(Messagse);
        console.log("BusList First Bus Name: " + Messagse);
        t = (Messagse as Route);
      }, onEnd: (res) => { }
    });
    return t;
  }

/**4
 *
 * @param updatedeBus new bus object to used with the update
 * this is useded to update a bus i the database
 * this does this by sendeing a new bus object with the same id.
 */
  EditBus(updatedeBus: Bus) {
    grpc.invoke(WebsiteGrpcEndpoint.UpdateBus, {
      request: updatedeBus,
      host: this.hostAddress,
      onMessage: (msg: Response | any) => {
        console.log("Update Bus have been run sucsufuly: " + ((msg as Response).getSucceeded()));

      }, onEnd: (res) => { console.log("UpdateBus havede ended" + res) }

    })

  }
  /*------ End of Grpc calls ------ */
}
