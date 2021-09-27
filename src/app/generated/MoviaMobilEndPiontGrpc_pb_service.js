// package: DatabaseGrpcService
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

var src_app_protos_MoviaMobilEndPiontGrpc_pb = require("./MoviaMobilEndPiontGrpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DatabaseGrpcService = (function () {
  function DatabaseGrpcService() {}
  DatabaseGrpcService.serviceName = "DatabaseGrpcService.DatabaseGrpcService";
  return DatabaseGrpcService;
}());

DatabaseGrpcService.CreateBus = {
  methodName: "CreateBus",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetBus = {
  methodName: "GetBus",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus
};

DatabaseGrpcService.GetAllBusses = {
  methodName: "GetAllBusses",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList
};

DatabaseGrpcService.UpdateBus = {
  methodName: "UpdateBus",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteBus = {
  methodName: "DeleteBus",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreateStop = {
  methodName: "CreateStop",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetStop = {
  methodName: "GetStop",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop
};

DatabaseGrpcService.GetAllStops = {
  methodName: "GetAllStops",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList
};

DatabaseGrpcService.UpdateStop = {
  methodName: "UpdateStop",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteStop = {
  methodName: "DeleteStop",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreateRoute = {
  methodName: "CreateRoute",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetRoute = {
  methodName: "GetRoute",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route
};

DatabaseGrpcService.GetAllRoutes = {
  methodName: "GetAllRoutes",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList
};

DatabaseGrpcService.UpdateRoute = {
  methodName: "UpdateRoute",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteRoute = {
  methodName: "DeleteRoute",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreatePassenger = {
  methodName: "CreatePassenger",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetPassenger = {
  methodName: "GetPassenger",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger
};

DatabaseGrpcService.GetAllPassengers = {
  methodName: "GetAllPassengers",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList
};

DatabaseGrpcService.UpdatePassenger = {
  methodName: "UpdatePassenger",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeletePassenger = {
  methodName: "DeletePassenger",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreateTicket = {
  methodName: "CreateTicket",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetTicket = {
  methodName: "GetTicket",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket
};

DatabaseGrpcService.GetAllTickets = {
  methodName: "GetAllTickets",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList
};

DatabaseGrpcService.UpdateTicket = {
  methodName: "UpdateTicket",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteTicket = {
  methodName: "DeleteTicket",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreateNfc = {
  methodName: "CreateNfc",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetNfc = {
  methodName: "GetNfc",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc
};

DatabaseGrpcService.GetAllNfcs = {
  methodName: "GetAllNfcs",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList
};

DatabaseGrpcService.UpdateNfc = {
  methodName: "UpdateNfc",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteNfc = {
  methodName: "DeleteNfc",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.CreateFob = {
  methodName: "CreateFob",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.GetFob = {
  methodName: "GetFob",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob
};

DatabaseGrpcService.GetAllFobs = {
  methodName: "GetAllFobs",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList
};

DatabaseGrpcService.UpdateFob = {
  methodName: "UpdateFob",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

DatabaseGrpcService.DeleteFob = {
  methodName: "DeleteFob",
  service: DatabaseGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

exports.DatabaseGrpcService = DatabaseGrpcService;

function DatabaseGrpcServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DatabaseGrpcServiceClient.prototype.createBus = function createBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateBus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getBus = function getBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetBus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllBusses = function getAllBusses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllBusses, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateBus = function updateBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateBus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteBus = function deleteBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteBus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createStop = function createStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateStop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getStop = function getStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetStop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllStops = function getAllStops(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllStops, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateStop = function updateStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateStop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteStop = function deleteStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteStop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createRoute = function createRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateRoute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getRoute = function getRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetRoute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllRoutes = function getAllRoutes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllRoutes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateRoute = function updateRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateRoute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteRoute = function deleteRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteRoute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createPassenger = function createPassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreatePassenger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getPassenger = function getPassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetPassenger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllPassengers = function getAllPassengers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllPassengers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updatePassenger = function updatePassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdatePassenger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deletePassenger = function deletePassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeletePassenger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createTicket = function createTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getTicket = function getTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllTickets = function getAllTickets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllTickets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateTicket = function updateTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteTicket = function deleteTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteTicket, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createNfc = function createNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateNfc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getNfc = function getNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetNfc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllNfcs = function getAllNfcs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllNfcs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateNfc = function updateNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateNfc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteNfc = function deleteNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteNfc, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.createFob = function createFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.CreateFob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getFob = function getFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetFob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.getAllFobs = function getAllFobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.GetAllFobs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.updateFob = function updateFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.UpdateFob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DatabaseGrpcServiceClient.prototype.deleteFob = function deleteFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DatabaseGrpcService.DeleteFob, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DatabaseGrpcServiceClient = DatabaseGrpcServiceClient;

