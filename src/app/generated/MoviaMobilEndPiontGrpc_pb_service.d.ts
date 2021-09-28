// package: WebsiteGrpcEndpoint
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

import * as src_app_protos_MoviaMobilEndPiontGrpc_pb from "./MoviaMobilEndPiontGrpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WebsiteGrpcEndpointCreateBus = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetBus = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
};

type WebsiteGrpcEndpointGetAllBusses = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList;
};

type WebsiteGrpcEndpointUpdateBus = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteBus = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreateStop = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetStop = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
};

type WebsiteGrpcEndpointGetAllStops = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList;
};

type WebsiteGrpcEndpointUpdateStop = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteStop = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreateRoute = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetRoute = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
};

type WebsiteGrpcEndpointGetAllRoutes = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList;
};

type WebsiteGrpcEndpointUpdateRoute = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteRoute = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreatePassenger = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetPassenger = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
};

type WebsiteGrpcEndpointGetAllPassengers = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList;
};

type WebsiteGrpcEndpointUpdatePassenger = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeletePassenger = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreateTicket = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetTicket = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
};

type WebsiteGrpcEndpointGetAllTickets = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList;
};

type WebsiteGrpcEndpointUpdateTicket = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteTicket = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreateNfc = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetNfc = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
};

type WebsiteGrpcEndpointGetAllNfcs = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList;
};

type WebsiteGrpcEndpointUpdateNfc = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteNfc = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointCreateFob = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointGetFob = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
};

type WebsiteGrpcEndpointGetAllFobs = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList;
};

type WebsiteGrpcEndpointUpdateFob = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type WebsiteGrpcEndpointDeleteFob = {
  readonly methodName: string;
  readonly service: typeof WebsiteGrpcEndpoint;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

export class WebsiteGrpcEndpoint {
  static readonly serviceName: string;
  static readonly CreateBus: WebsiteGrpcEndpointCreateBus;
  static readonly GetBus: WebsiteGrpcEndpointGetBus;
  static readonly GetAllBusses: WebsiteGrpcEndpointGetAllBusses;
  static readonly UpdateBus: WebsiteGrpcEndpointUpdateBus;
  static readonly DeleteBus: WebsiteGrpcEndpointDeleteBus;
  static readonly CreateStop: WebsiteGrpcEndpointCreateStop;
  static readonly GetStop: WebsiteGrpcEndpointGetStop;
  static readonly GetAllStops: WebsiteGrpcEndpointGetAllStops;
  static readonly UpdateStop: WebsiteGrpcEndpointUpdateStop;
  static readonly DeleteStop: WebsiteGrpcEndpointDeleteStop;
  static readonly CreateRoute: WebsiteGrpcEndpointCreateRoute;
  static readonly GetRoute: WebsiteGrpcEndpointGetRoute;
  static readonly GetAllRoutes: WebsiteGrpcEndpointGetAllRoutes;
  static readonly UpdateRoute: WebsiteGrpcEndpointUpdateRoute;
  static readonly DeleteRoute: WebsiteGrpcEndpointDeleteRoute;
  static readonly CreatePassenger: WebsiteGrpcEndpointCreatePassenger;
  static readonly GetPassenger: WebsiteGrpcEndpointGetPassenger;
  static readonly GetAllPassengers: WebsiteGrpcEndpointGetAllPassengers;
  static readonly UpdatePassenger: WebsiteGrpcEndpointUpdatePassenger;
  static readonly DeletePassenger: WebsiteGrpcEndpointDeletePassenger;
  static readonly CreateTicket: WebsiteGrpcEndpointCreateTicket;
  static readonly GetTicket: WebsiteGrpcEndpointGetTicket;
  static readonly GetAllTickets: WebsiteGrpcEndpointGetAllTickets;
  static readonly UpdateTicket: WebsiteGrpcEndpointUpdateTicket;
  static readonly DeleteTicket: WebsiteGrpcEndpointDeleteTicket;
  static readonly CreateNfc: WebsiteGrpcEndpointCreateNfc;
  static readonly GetNfc: WebsiteGrpcEndpointGetNfc;
  static readonly GetAllNfcs: WebsiteGrpcEndpointGetAllNfcs;
  static readonly UpdateNfc: WebsiteGrpcEndpointUpdateNfc;
  static readonly DeleteNfc: WebsiteGrpcEndpointDeleteNfc;
  static readonly CreateFob: WebsiteGrpcEndpointCreateFob;
  static readonly GetFob: WebsiteGrpcEndpointGetFob;
  static readonly GetAllFobs: WebsiteGrpcEndpointGetAllFobs;
  static readonly UpdateFob: WebsiteGrpcEndpointUpdateFob;
  static readonly DeleteFob: WebsiteGrpcEndpointDeleteFob;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WebsiteGrpcEndpointClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus|null) => void
  ): UnaryResponse;
  getBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus|null) => void
  ): UnaryResponse;
  getAllBusses(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList|null) => void
  ): UnaryResponse;
  getAllBusses(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList|null) => void
  ): UnaryResponse;
  updateBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop|null) => void
  ): UnaryResponse;
  getStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop|null) => void
  ): UnaryResponse;
  getAllStops(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList|null) => void
  ): UnaryResponse;
  getAllStops(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList|null) => void
  ): UnaryResponse;
  updateStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteStop(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route|null) => void
  ): UnaryResponse;
  getRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route|null) => void
  ): UnaryResponse;
  getAllRoutes(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList|null) => void
  ): UnaryResponse;
  getAllRoutes(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteRoute(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createPassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createPassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getPassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger|null) => void
  ): UnaryResponse;
  getPassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger|null) => void
  ): UnaryResponse;
  getAllPassengers(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList|null) => void
  ): UnaryResponse;
  getAllPassengers(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList|null) => void
  ): UnaryResponse;
  updatePassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updatePassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deletePassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deletePassenger(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket|null) => void
  ): UnaryResponse;
  getTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket|null) => void
  ): UnaryResponse;
  getAllTickets(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList|null) => void
  ): UnaryResponse;
  getAllTickets(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList|null) => void
  ): UnaryResponse;
  updateTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteTicket(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc|null) => void
  ): UnaryResponse;
  getNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc|null) => void
  ): UnaryResponse;
  getAllNfcs(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList|null) => void
  ): UnaryResponse;
  getAllNfcs(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList|null) => void
  ): UnaryResponse;
  updateNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteNfc(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  createFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  getFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob|null) => void
  ): UnaryResponse;
  getFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob|null) => void
  ): UnaryResponse;
  getAllFobs(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList|null) => void
  ): UnaryResponse;
  getAllFobs(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList|null) => void
  ): UnaryResponse;
  updateFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  updateFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
  deleteFob(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response|null) => void
  ): UnaryResponse;
}

