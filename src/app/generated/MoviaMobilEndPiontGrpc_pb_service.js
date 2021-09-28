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

exports.WebsiteGrpcEndpointClient = WebsiteGrpcEndpointClient;

