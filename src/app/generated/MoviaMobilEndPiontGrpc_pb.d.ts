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

export class Passenger extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Passenger.AsObject;
  static toObject(includeInstance: boolean, msg: Passenger): Passenger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Passenger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Passenger;
  static deserializeBinaryFromReader(message: Passenger, reader: jspb.BinaryReader): Passenger;
}

export namespace Passenger {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class PassengerList extends jspb.Message {
  clearPassengersList(): void;
  getPassengersList(): Array<Passenger>;
  setPassengersList(value: Array<Passenger>): void;
  addPassengers(value?: Passenger, index?: number): Passenger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PassengerList.AsObject;
  static toObject(includeInstance: boolean, msg: PassengerList): PassengerList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PassengerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PassengerList;
  static deserializeBinaryFromReader(message: PassengerList, reader: jspb.BinaryReader): PassengerList;
}

export namespace PassengerList {
  export type AsObject = {
    passengersList: Array<Passenger.AsObject>,
  }
}

export class Ticket extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getBusId(): number;
  setBusId(value: number): void;

  getPurchaseTime(): string;
  setPurchaseTime(value: string): void;

  getDepartureTime(): string;
  setDepartureTime(value: string): void;

  getDepartureStopId(): number;
  setDepartureStopId(value: number): void;

  getDestinationStopId(): number;
  setDestinationStopId(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    id: number,
    busId: number,
    purchaseTime: string,
    departureTime: string,
    departureStopId: number,
    destinationStopId: number,
    price: number,
  }
}

export class TicketList extends jspb.Message {
  clearTicketsList(): void;
  getTicketsList(): Array<Ticket>;
  setTicketsList(value: Array<Ticket>): void;
  addTickets(value?: Ticket, index?: number): Ticket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketList.AsObject;
  static toObject(includeInstance: boolean, msg: TicketList): TicketList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketList;
  static deserializeBinaryFromReader(message: TicketList, reader: jspb.BinaryReader): TicketList;
}

export namespace TicketList {
  export type AsObject = {
    ticketsList: Array<Ticket.AsObject>,
  }
}

export class Nfc extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  getPassengerId(): number;
  setPassengerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nfc.AsObject;
  static toObject(includeInstance: boolean, msg: Nfc): Nfc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Nfc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nfc;
  static deserializeBinaryFromReader(message: Nfc, reader: jspb.BinaryReader): Nfc;
}

export namespace Nfc {
  export type AsObject = {
    id: number,
    uuid: string,
    passengerId: number,
  }
}

export class NfcList extends jspb.Message {
  clearNfcsList(): void;
  getNfcsList(): Array<Nfc>;
  setNfcsList(value: Array<Nfc>): void;
  addNfcs(value?: Nfc, index?: number): Nfc;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NfcList.AsObject;
  static toObject(includeInstance: boolean, msg: NfcList): NfcList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NfcList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NfcList;
  static deserializeBinaryFromReader(message: NfcList, reader: jspb.BinaryReader): NfcList;
}

export namespace NfcList {
  export type AsObject = {
    nfcsList: Array<Nfc.AsObject>,
  }
}

export class Fob extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getMacAddress(): string;
  setMacAddress(value: string): void;

  getPassengerId(): number;
  setPassengerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fob.AsObject;
  static toObject(includeInstance: boolean, msg: Fob): Fob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fob;
  static deserializeBinaryFromReader(message: Fob, reader: jspb.BinaryReader): Fob;
}

export namespace Fob {
  export type AsObject = {
    id: number,
    macAddress: string,
    passengerId: number,
  }
}

export class FobList extends jspb.Message {
  clearFobsList(): void;
  getFobsList(): Array<Fob>;
  setFobsList(value: Array<Fob>): void;
  addFobs(value?: Fob, index?: number): Fob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FobList.AsObject;
  static toObject(includeInstance: boolean, msg: FobList): FobList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FobList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FobList;
  static deserializeBinaryFromReader(message: FobList, reader: jspb.BinaryReader): FobList;
}

export namespace FobList {
  export type AsObject = {
    fobsList: Array<Fob.AsObject>,
  }
}

