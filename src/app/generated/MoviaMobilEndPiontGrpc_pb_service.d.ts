// package: DatabaseGrpcService
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

import * as src_app_protos_MoviaMobilEndPiontGrpc_pb from "../generated/MoviaMobilEndPiontGrpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DatabaseGrpcServiceCreateBus = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetBus = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
};

type DatabaseGrpcServiceGetAllBusses = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList;
};

type DatabaseGrpcServiceUpdateBus = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteBus = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreateStop = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetStop = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
};

type DatabaseGrpcServiceGetAllStops = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList;
};

type DatabaseGrpcServiceUpdateStop = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteStop = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreateRoute = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetRoute = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
};

type DatabaseGrpcServiceGetAllRoutes = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList;
};

type DatabaseGrpcServiceUpdateRoute = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Route;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteRoute = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreatePassenger = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetPassenger = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
};

type DatabaseGrpcServiceGetAllPassengers = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList;
};

type DatabaseGrpcServiceUpdatePassenger = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeletePassenger = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreateTicket = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetTicket = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
};

type DatabaseGrpcServiceGetAllTickets = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList;
};

type DatabaseGrpcServiceUpdateTicket = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteTicket = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreateNfc = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetNfc = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
};

type DatabaseGrpcServiceGetAllNfcs = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList;
};

type DatabaseGrpcServiceUpdateNfc = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteNfc = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceCreateFob = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceGetFob = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
};

type DatabaseGrpcServiceGetAllFobs = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList;
};

type DatabaseGrpcServiceUpdateFob = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

type DatabaseGrpcServiceDeleteFob = {
  readonly methodName: string;
  readonly service: typeof DatabaseGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Request;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Response;
};

export class DatabaseGrpcService {
  static readonly serviceName: string;
  static readonly CreateBus: DatabaseGrpcServiceCreateBus;
  static readonly GetBus: DatabaseGrpcServiceGetBus;
  static readonly GetAllBusses: DatabaseGrpcServiceGetAllBusses;
  static readonly UpdateBus: DatabaseGrpcServiceUpdateBus;
  static readonly DeleteBus: DatabaseGrpcServiceDeleteBus;
  static readonly CreateStop: DatabaseGrpcServiceCreateStop;
  static readonly GetStop: DatabaseGrpcServiceGetStop;
  static readonly GetAllStops: DatabaseGrpcServiceGetAllStops;
  static readonly UpdateStop: DatabaseGrpcServiceUpdateStop;
  static readonly DeleteStop: DatabaseGrpcServiceDeleteStop;
  static readonly CreateRoute: DatabaseGrpcServiceCreateRoute;
  static readonly GetRoute: DatabaseGrpcServiceGetRoute;
  static readonly GetAllRoutes: DatabaseGrpcServiceGetAllRoutes;
  static readonly UpdateRoute: DatabaseGrpcServiceUpdateRoute;
  static readonly DeleteRoute: DatabaseGrpcServiceDeleteRoute;
  static readonly CreatePassenger: DatabaseGrpcServiceCreatePassenger;
  static readonly GetPassenger: DatabaseGrpcServiceGetPassenger;
  static readonly GetAllPassengers: DatabaseGrpcServiceGetAllPassengers;
  static readonly UpdatePassenger: DatabaseGrpcServiceUpdatePassenger;
  static readonly DeletePassenger: DatabaseGrpcServiceDeletePassenger;
  static readonly CreateTicket: DatabaseGrpcServiceCreateTicket;
  static readonly GetTicket: DatabaseGrpcServiceGetTicket;
  static readonly GetAllTickets: DatabaseGrpcServiceGetAllTickets;
  static readonly UpdateTicket: DatabaseGrpcServiceUpdateTicket;
  static readonly DeleteTicket: DatabaseGrpcServiceDeleteTicket;
  static readonly CreateNfc: DatabaseGrpcServiceCreateNfc;
  static readonly GetNfc: DatabaseGrpcServiceGetNfc;
  static readonly GetAllNfcs: DatabaseGrpcServiceGetAllNfcs;
  static readonly UpdateNfc: DatabaseGrpcServiceUpdateNfc;
  static readonly DeleteNfc: DatabaseGrpcServiceDeleteNfc;
  static readonly CreateFob: DatabaseGrpcServiceCreateFob;
  static readonly GetFob: DatabaseGrpcServiceGetFob;
  static readonly GetAllFobs: DatabaseGrpcServiceGetAllFobs;
  static readonly UpdateFob: DatabaseGrpcServiceUpdateFob;
  static readonly DeleteFob: DatabaseGrpcServiceDeleteFob;
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

export class DatabaseGrpcServiceClient {
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

