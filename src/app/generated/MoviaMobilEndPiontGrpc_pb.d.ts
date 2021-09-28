// package: WebsiteGrpcEndpoint
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

import * as jspb from "google-protobuf";

export class Bus extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMake(): string;
  setMake(value: string): void;

  getDriver(): string;
  setDriver(value: string): void;

  getRouteId(): number;
  setRouteId(value: number): void;

  getTotalBusCapacity(): number;
  setTotalBusCapacity(value: number): void;

  getCurrentBusOccupation(): number;
  setCurrentBusOccupation(value: number): void;

  getLatitude(): string;
  setLatitude(value: string): void;

  getLongitude(): string;
  setLongitude(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bus.AsObject;
  static toObject(includeInstance: boolean, msg: Bus): Bus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bus;
  static deserializeBinaryFromReader(message: Bus, reader: jspb.BinaryReader): Bus;
}

export namespace Bus {
  export type AsObject = {
    id: number,
    name: string,
    make: string,
    driver: string,
    routeId: number,
    totalBusCapacity: number,
    currentBusOccupation: number,
    latitude: string,
    longitude: string,
  }
}

export class BusList extends jspb.Message {
  clearBuslistList(): void;
  getBuslistList(): Array<Bus>;
  setBuslistList(value: Array<Bus>): void;
  addBuslist(value?: Bus, index?: number): Bus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusList.AsObject;
  static toObject(includeInstance: boolean, msg: BusList): BusList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusList;
  static deserializeBinaryFromReader(message: BusList, reader: jspb.BinaryReader): BusList;
}

export namespace BusList {
  export type AsObject = {
    buslistList: Array<Bus.AsObject>,
  }
}

export class Response extends jspb.Message {
  getSucceeded(): boolean;
  setSucceeded(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    succeeded: boolean,
  }
}

export class Request extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    id: number,
  }
}

export class Stop extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getLatitude(): string;
  setLatitude(value: string): void;

  getLongitude(): string;
  setLongitude(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stop.AsObject;
  static toObject(includeInstance: boolean, msg: Stop): Stop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Stop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stop;
  static deserializeBinaryFromReader(message: Stop, reader: jspb.BinaryReader): Stop;
}

export namespace Stop {
  export type AsObject = {
    id: number,
    name: string,
    latitude: string,
    longitude: string,
  }
}

export class StopList extends jspb.Message {
  clearStopsList(): void;
  getStopsList(): Array<Stop>;
  setStopsList(value: Array<Stop>): void;
  addStops(value?: Stop, index?: number): Stop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopList.AsObject;
  static toObject(includeInstance: boolean, msg: StopList): StopList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopList;
  static deserializeBinaryFromReader(message: StopList, reader: jspb.BinaryReader): StopList;
}

export namespace StopList {
  export type AsObject = {
    stopsList: Array<Stop.AsObject>,
  }
}

export class Route extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class RouteList extends jspb.Message {
  clearRoutesList(): void;
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): void;
  addRoutes(value?: Route, index?: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteList.AsObject;
  static toObject(includeInstance: boolean, msg: RouteList): RouteList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteList;
  static deserializeBinaryFromReader(message: RouteList, reader: jspb.BinaryReader): RouteList;
}

export namespace RouteList {
  export type AsObject = {
    routesList: Array<Route.AsObject>,
  }
}

