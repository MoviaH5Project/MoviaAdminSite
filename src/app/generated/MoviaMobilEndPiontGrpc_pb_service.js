// package: BusGrpcProto
// file: src/app/protos/MoviaMobilEndPiontGrpc.proto

var src_app_protos_MoviaMobilEndPiontGrpc_pb = require("../../../src/app/generated/MoviaMobilEndPiontGrpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BusGrpcService = (function () {
  function BusGrpcService() {}
  BusGrpcService.serviceName = "BusGrpcProto.BusGrpcService";
  return BusGrpcService;
}());

BusGrpcService.CreateBus = {
  methodName: "CreateBus",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged
};

BusGrpcService.GetBusInfo = {
  methodName: "GetBusInfo",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus
};

BusGrpcService.UpdateBusInfo = {
  methodName: "UpdateBusInfo",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged
};

BusGrpcService.DeleteBus = {
  methodName: "DeleteBus",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged
};

BusGrpcService.GetAllBuss = {
  methodName: "GetAllBuss",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusRequest,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.BusList
};

BusGrpcService.UpdaeBusPoscition = {
  methodName: "UpdaeBusPoscition",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged
};

BusGrpcService.UpdatePassagseCount = {
  methodName: "UpdatePassagseCount",
  service: BusGrpcService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_MoviaMobilEndPiontGrpc_pb.Bus,
  responseType: src_app_protos_MoviaMobilEndPiontGrpc_pb.DatabaseChaged
};

exports.BusGrpcService = BusGrpcService;

function BusGrpcServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BusGrpcServiceClient.prototype.createBus = function createBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.CreateBus, {
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

BusGrpcServiceClient.prototype.getBusInfo = function getBusInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.GetBusInfo, {
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

BusGrpcServiceClient.prototype.updateBusInfo = function updateBusInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.UpdateBusInfo, {
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

BusGrpcServiceClient.prototype.deleteBus = function deleteBus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.DeleteBus, {
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

BusGrpcServiceClient.prototype.getAllBuss = function getAllBuss(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.GetAllBuss, {
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

BusGrpcServiceClient.prototype.updaeBusPoscition = function updaeBusPoscition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.UpdaeBusPoscition, {
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

BusGrpcServiceClient.prototype.updatePassagseCount = function updatePassagseCount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BusGrpcService.UpdatePassagseCount, {
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

exports.BusGrpcServiceClient = BusGrpcServiceClient;

