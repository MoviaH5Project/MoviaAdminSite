// package: BusGrpcProto
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

  getRouteid(): number;
  setRouteid(value: number): void;

  getTotaltbuscap(): number;
  setTotaltbuscap(value: number): void;

  getCurrentpaxcont(): number;
  setCurrentpaxcont(value: number): void;

  getLat(): string;
  setLat(value: string): void;

  getLon(): string;
  setLon(value: string): void;

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
    routeid: number,
    totaltbuscap: number,
    currentpaxcont: number,
    lat: string,
    lon: string,
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

export class DatabaseChaged extends jspb.Message {
  getHaschanbged(): boolean;
  setHaschanbged(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseChaged.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseChaged): DatabaseChaged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatabaseChaged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseChaged;
  static deserializeBinaryFromReader(message: DatabaseChaged, reader: jspb.BinaryReader): DatabaseChaged;
}

export namespace DatabaseChaged {
  export type AsObject = {
    haschanbged: boolean,
  }
}

export class BusRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BusRequest): BusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BusRequest;
  static deserializeBinaryFromReader(message: BusRequest, reader: jspb.BinaryReader): BusRequest;
}

export namespace BusRequest {
  export type AsObject = {
    id: string,
  }
}

