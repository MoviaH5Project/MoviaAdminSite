// package: WebsiteGrpcEndpoint
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

var src_app_protos_MoviaMobilEndPiontGrpc_pb = require("./MoviaMobilEndPiontGrpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WebsiteGrpcEndpoint = (function () {
  function WebsiteGrpcEndpoint() {}
  WebsiteGrpcEndpoint.serviceName = "WebsiteGrpcEndpoint.WebsiteGrpcEndpoint";
  return WebsiteGrpcEndpoint;
}());

WebsiteGrpcEndpoint.CreateBus = {
  methodName: "CreateBus",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetBus = {
  methodName: "GetBus",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus
};

WebsiteGrpcEndpoint.GetAllBusses = {
  methodName: "GetAllBusses",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList
};

WebsiteGrpcEndpoint.UpdateBus = {
  methodName: "UpdateBus",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteBus = {
  methodName: "DeleteBus",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreateStop = {
  methodName: "CreateStop",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetStop = {
  methodName: "GetStop",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop
};

WebsiteGrpcEndpoint.GetAllStops = {
  methodName: "GetAllStops",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.StopList
};

WebsiteGrpcEndpoint.UpdateStop = {
  methodName: "UpdateStop",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Stop,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteStop = {
  methodName: "DeleteStop",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreateRoute = {
  methodName: "CreateRoute",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetRoute = {
  methodName: "GetRoute",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route
};

WebsiteGrpcEndpoint.GetAllRoutes = {
  methodName: "GetAllRoutes",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.RouteList
};

WebsiteGrpcEndpoint.UpdateRoute = {
  methodName: "UpdateRoute",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Route,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteRoute = {
  methodName: "DeleteRoute",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreatePassenger = {
  methodName: "CreatePassenger",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetPassenger = {
  methodName: "GetPassenger",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger
};

WebsiteGrpcEndpoint.GetAllPassengers = {
  methodName: "GetAllPassengers",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.PassengerList
};

WebsiteGrpcEndpoint.UpdatePassenger = {
  methodName: "UpdatePassenger",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Passenger,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeletePassenger = {
  methodName: "DeletePassenger",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreateTicket = {
  methodName: "CreateTicket",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetTicket = {
  methodName: "GetTicket",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket
};

WebsiteGrpcEndpoint.GetAllTickets = {
  methodName: "GetAllTickets",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.TicketList
};

WebsiteGrpcEndpoint.UpdateTicket = {
  methodName: "UpdateTicket",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Ticket,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteTicket = {
  methodName: "DeleteTicket",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreateNfc = {
  methodName: "CreateNfc",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetNfc = {
  methodName: "GetNfc",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc
};

WebsiteGrpcEndpoint.GetAllNfcs = {
  methodName: "GetAllNfcs",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.NfcList
};

WebsiteGrpcEndpoint.UpdateNfc = {
  methodName: "UpdateNfc",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Nfc,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteNfc = {
  methodName: "DeleteNfc",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.CreateFob = {
  methodName: "CreateFob",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.GetFob = {
  methodName: "GetFob",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob
};

WebsiteGrpcEndpoint.GetAllFobs = {
  methodName: "GetAllFobs",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.FobList
};

WebsiteGrpcEndpoint.UpdateFob = {
  methodName: "UpdateFob",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Fob,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

WebsiteGrpcEndpoint.DeleteFob = {
  methodName: "DeleteFob",
  service: WebsiteGrpcEndpoint,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Request,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Response
};

exports.WebsiteGrpcEndpoint = WebsiteGrpcEndpoint;

function WebsiteGrpcEndpointClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WebsiteGrpcEndpointClient.prototype.createBus = function createBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateBus, {
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

WebsiteGrpcEndpointClient.prototype.getBus = function getBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetBus, {
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

WebsiteGrpcEndpointClient.prototype.getAllBusses = function getAllBusses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllBusses, {
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

WebsiteGrpcEndpointClient.prototype.updateBus = function updateBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateBus, {
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

WebsiteGrpcEndpointClient.prototype.deleteBus = function deleteBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteBus, {
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

WebsiteGrpcEndpointClient.prototype.createStop = function createStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateStop, {
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

WebsiteGrpcEndpointClient.prototype.getStop = function getStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetStop, {
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

WebsiteGrpcEndpointClient.prototype.getAllStops = function getAllStops(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllStops, {
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

WebsiteGrpcEndpointClient.prototype.updateStop = function updateStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateStop, {
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

WebsiteGrpcEndpointClient.prototype.deleteStop = function deleteStop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteStop, {
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

WebsiteGrpcEndpointClient.prototype.createRoute = function createRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateRoute, {
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

WebsiteGrpcEndpointClient.prototype.getRoute = function getRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetRoute, {
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

WebsiteGrpcEndpointClient.prototype.getAllRoutes = function getAllRoutes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllRoutes, {
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

WebsiteGrpcEndpointClient.prototype.updateRoute = function updateRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateRoute, {
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

WebsiteGrpcEndpointClient.prototype.deleteRoute = function deleteRoute(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteRoute, {
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

WebsiteGrpcEndpointClient.prototype.createPassenger = function createPassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreatePassenger, {
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

WebsiteGrpcEndpointClient.prototype.getPassenger = function getPassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetPassenger, {
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

WebsiteGrpcEndpointClient.prototype.getAllPassengers = function getAllPassengers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllPassengers, {
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

WebsiteGrpcEndpointClient.prototype.updatePassenger = function updatePassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdatePassenger, {
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

WebsiteGrpcEndpointClient.prototype.deletePassenger = function deletePassenger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeletePassenger, {
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

WebsiteGrpcEndpointClient.prototype.createTicket = function createTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateTicket, {
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

WebsiteGrpcEndpointClient.prototype.getTicket = function getTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetTicket, {
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

WebsiteGrpcEndpointClient.prototype.getAllTickets = function getAllTickets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllTickets, {
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

WebsiteGrpcEndpointClient.prototype.updateTicket = function updateTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateTicket, {
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

WebsiteGrpcEndpointClient.prototype.deleteTicket = function deleteTicket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteTicket, {
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

WebsiteGrpcEndpointClient.prototype.createNfc = function createNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateNfc, {
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

WebsiteGrpcEndpointClient.prototype.getNfc = function getNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetNfc, {
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

WebsiteGrpcEndpointClient.prototype.getAllNfcs = function getAllNfcs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllNfcs, {
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

WebsiteGrpcEndpointClient.prototype.updateNfc = function updateNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateNfc, {
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

WebsiteGrpcEndpointClient.prototype.deleteNfc = function deleteNfc(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteNfc, {
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

WebsiteGrpcEndpointClient.prototype.createFob = function createFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.CreateFob, {
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

WebsiteGrpcEndpointClient.prototype.getFob = function getFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetFob, {
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

WebsiteGrpcEndpointClient.prototype.getAllFobs = function getAllFobs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.GetAllFobs, {
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

WebsiteGrpcEndpointClient.prototype.updateFob = function updateFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.UpdateFob, {
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

WebsiteGrpcEndpointClient.prototype.deleteFob = function deleteFob(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WebsiteGrpcEndpoint.DeleteFob, {
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

exports.WebsiteGrpcEndpointClient = WebsiteGrpcEndpointClient;

