/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-js/context */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');
var Future = require('vertx-js/future');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JContext = Java.type('io.vertx.core.Context');

/**

 @class
*/
var Context = function(j_val) {

  var j_context = j_val;
  var that = this;

  var __super_isOnWorkerThread = this.isOnWorkerThread;
  var __super_isOnEventLoopThread = this.isOnEventLoopThread;
  var __super_isOnVertxThread = this.isOnVertxThread;
  var __super_runOnContext = this.runOnContext;
  var __super_executeBlocking = this.executeBlocking;
  var __super_executeBlocking = this.executeBlocking;
  var __super_deploymentID = this.deploymentID;
  var __super_config = this.config;
  var __super_processArgs = this.processArgs;
  var __super_isEventLoopContext = this.isEventLoopContext;
  var __super_isWorkerContext = this.isWorkerContext;
  var __super_isMultiThreadedWorkerContext = this.isMultiThreadedWorkerContext;
  var __super_get = this.get;
  var __super_put = this.put;
  var __super_remove = this.remove;
  var __super_owner = this.owner;
  var __super_getInstanceCount = this.getInstanceCount;
  var __super_exceptionHandler = this.exceptionHandler;
  /**
   Run the specified action asynchronously on the same context, some time after the current execution has completed.

   @public
   @param action {function} the action to run 
   */
  this.runOnContext =  function(action) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_context["runOnContext(io.vertx.core.Handler)"](__args[0]);
    } else if (typeof __super_runOnContext != 'undefined') {
      return __super_runOnContext.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Invoke {@link Context#executeBlocking} with order = true.

   @public
   @param blockingCodeHandler {function} handler representing the blocking code to run 
   @param resultHandler {function} handler that will be called when the blocking code is complete 
   */
  this.executeBlocking =  function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'function' && typeof __args[1] ==='boolean' && typeof __args[2] === 'function') {
      j_context["executeBlocking(io.vertx.core.Handler,boolean,io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(Future, jVal, undefined));
      }, __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnTypeUnknown(ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_context["executeBlocking(io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(Future, jVal, undefined));
      }, function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnTypeUnknown(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_executeBlocking != 'undefined') {
      return __super_executeBlocking.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If the context is associated with a Verticle deployment, this returns the deployment ID of that deployment.

   @public

   @return {string} the deployment ID of the deployment or null if not a Verticle deployment
   */
  this.deploymentID =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["deploymentID()"]() ;
    } else if (typeof __super_deploymentID != 'undefined') {
      return __super_deploymentID.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   If the context is associated with a Verticle deployment, this returns the configuration that was specified when
   the verticle was deployed.

   @public

   @return {Object} the configuration of the deployment or null if not a Verticle deployment
   */
  this.config =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_context["config()"]()) ;
    } else if (typeof __super_config != 'undefined') {
      return __super_config.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The process args

   @public

   @return {Array.<string>}
   */
  this.processArgs =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["processArgs()"]() ;
    } else if (typeof __super_processArgs != 'undefined') {
      return __super_processArgs.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the current context an event loop context?
   <p>
   NOTE! when running blocking code using {@link Vertx#executeBlocking} from a
   standard (not worker) verticle, the context will still an event loop context and this 
   will return true.

   @public

   @return {boolean} true if false otherwise
   */
  this.isEventLoopContext =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["isEventLoopContext()"]() ;
    } else if (typeof __super_isEventLoopContext != 'undefined') {
      return __super_isEventLoopContext.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the current context a worker context?
   <p>
   NOTE! when running blocking code using {@link Vertx#executeBlocking} from a
   standard (not worker) verticle, the context will still an event loop context and this 
   will return false.

   @public

   @return {boolean} true if the current context is a worker context, false otherwise
   */
  this.isWorkerContext =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["isWorkerContext()"]() ;
    } else if (typeof __super_isWorkerContext != 'undefined') {
      return __super_isWorkerContext.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Is the current context a multi-threaded worker context?

   @public

   @return {boolean} true if the current context is a multi-threaded worker context, false otherwise
   */
  this.isMultiThreadedWorkerContext =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["isMultiThreadedWorkerContext()"]() ;
    } else if (typeof __super_isMultiThreadedWorkerContext != 'undefined') {
      return __super_isMultiThreadedWorkerContext.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get some data from the context.

   @public
   @param key {string} the key of the data 
   @return {Object} the data
   */
  this.get =  function(key) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_context["get(java.lang.String)"](__args[0])) ;
    } else if (typeof __super_get != 'undefined') {
      return __super_get.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Put some data in the context.
   <p>
   This can be used to share data between different handlers that share a context

   @public
   @param key {string} the key of the data 
   @param value {Object} the data 
   */
  this.put =  function(key, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] !== 'function') {
      j_context["put(java.lang.String,java.lang.Object)"](__args[0], utils.convParamTypeUnknown(__args[1]));
    } else if (typeof __super_put != 'undefined') {
      return __super_put.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove some data from the context.

   @public
   @param key {string} the key to remove 
   @return {boolean} true if removed successfully, false otherwise
   */
  this.remove =  function(key) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_context["remove(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_remove != 'undefined') {
      return __super_remove.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Vertx} The Vertx instance that created the context
   */
  this.owner =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Vertx, j_context["owner()"]()) ;
    } else if (typeof __super_owner != 'undefined') {
      return __super_owner.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the number of instances of the verticle that were deployed in the deployment (if any) related to this context
   */
  this.getInstanceCount =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_context["getInstanceCount()"]() ;
    } else if (typeof __super_getInstanceCount != 'undefined') {
      return __super_getInstanceCount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set an exception handler called when the context runs an action throwing an uncaught throwable.<p/>

   When this handler is called, {@link Vertx#currentContext} will return this context.

   @public
   @param handler {function} the exception handler 
   @return {Context} a reference to this, so the API can be used fluently
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_context["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_context;
};

Context._jclass = utils.getJavaClass("io.vertx.core.Context");
Context._jtype = {accept: function(obj) {
    return Context._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Context.prototype, {});
    Context.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Context._create = function(jdel) {var obj = Object.create(Context.prototype, {});
  Context.apply(obj, arguments);
  return obj;
}
/**
 Is the current thread a worker thread?
 <p>
 NOTE! This is not always the same as calling {@link Context#isWorkerContext}. If you are running blocking code
 from an event loop context, then this will return true but {@link Context#isWorkerContext} will return false.

 @memberof module:vertx-js/context

 @return {boolean} true if current thread is a worker thread, false otherwise
 */
Context.isOnWorkerThread =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return JContext["isOnWorkerThread()"]() ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Is the current thread an event thread?
 <p>
 NOTE! This is not always the same as calling {@link Context#isEventLoopContext}. If you are running blocking code
 from an event loop context, then this will return false but {@link Context#isEventLoopContext} will return true.

 @memberof module:vertx-js/context

 @return {boolean} true if current thread is a worker thread, false otherwise
 */
Context.isOnEventLoopThread =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return JContext["isOnEventLoopThread()"]() ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Is the current thread a Vert.x thread? That's either a worker thread or an event loop thread

 @memberof module:vertx-js/context

 @return {boolean} true if current thread is a Vert.x thread, false otherwise
 */
Context.isOnVertxThread =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return JContext["isOnVertxThread()"]() ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Context;