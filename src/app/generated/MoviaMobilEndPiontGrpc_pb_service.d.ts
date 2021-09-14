// package: BusGrpcProto
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

import * as src_app_protos_MoviaMobilEndPiontGrpc_pb from "../../../src/app/generated/MoviaMobilEndPiontGrpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BusGrpcServiceCreateBus = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged;
};

type BusGrpcServiceGetBusInfo = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
};

type BusGrpcServiceUpdateBusInfo = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged;
};

type BusGrpcServiceDeleteBus = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged;
};

type BusGrpcServiceGetAllBuss = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList;
};

type BusGrpcServiceUpdaeBusPoscition = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged;
};

type BusGrpcServiceUpdatePassagseCount = {
  readonly methodName: string;
  readonly service: typeof BusGrpcService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus;
  readonly responseType: typeof src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged;
};

export class BusGrpcService {
  static readonly serviceName: string;
  static readonly CreateBus: BusGrpcServiceCreateBus;
  static readonly GetBusInfo: BusGrpcServiceGetBusInfo;
  static readonly UpdateBusInfo: BusGrpcServiceUpdateBusInfo;
  static readonly DeleteBus: BusGrpcServiceDeleteBus;
  static readonly GetAllBuss: BusGrpcServiceGetAllBuss;
  static readonly UpdaeBusPoscition: BusGrpcServiceUpdaeBusPoscition;
  static readonly UpdatePassagseCount: BusGrpcServiceUpdatePassagseCount;
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

export class BusGrpcServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  createBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  getBusInfo(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus|null) => void
  ): UnaryResponse;
  getBusInfo(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus|null) => void
  ): UnaryResponse;
  updateBusInfo(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  updateBusInfo(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  deleteBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  deleteBus(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  getAllBuss(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList|null) => void
  ): UnaryResponse;
  getAllBuss(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList|null) => void
  ): UnaryResponse;
  updaeBusPoscition(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  updaeBusPoscition(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  updatePassagseCount(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
  updatePassagseCount(
    requestMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged|null) => void
  ): UnaryResponse;
}

