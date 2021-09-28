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
}

