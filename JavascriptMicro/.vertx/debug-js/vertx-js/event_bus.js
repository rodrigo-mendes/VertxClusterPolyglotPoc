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

/** @module vertx-js/event_bus */
var utils = require('vertx-js/util/utils');
var DeliveryContext = require('vertx-js/delivery_context');
var Measured = require('vertx-js/measured');
var Message = require('vertx-js/message');
var MessageConsumer = require('vertx-js/message_consumer');
var MessageProducer = require('vertx-js/message_producer');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JEventBus = Java.type('io.vertx.core.eventbus.EventBus');
var DeliveryOptions = Java.type('io.vertx.core.eventbus.DeliveryOptions');

/**
 A Vert.x event-bus is a light-weight distributed messaging system which allows different parts of your application,
 or different applications and services to communicate with each in a loosely coupled way.
 <p>
 An event-bus supports publish-subscribe messaging, point-to-point messaging and request-response messaging.
 <p>
 Message delivery is best-effort and messages can be lost if failure of all or part of the event bus occurs.
 <p>
 Please refer to the documentation for more information on the event bus.

 @class
*/
var EventBus = function(j_val) {

  var j_eventBus = j_val;
  var that = this;
  Measured.call(this, j_val);

  var __super_isMetricsEnabled = this.isMetricsEnabled;
  var __super_send = this.send;
  var __super_send = this.send;
  var __super_send = this.send;
  var __super_send = this.send;
  var __super_publish = this.publish;
  var __super_publish = this.publish;
  var __super_consumer = this.consumer;
  var __super_consumer = this.consumer;
  var __super_localConsumer = this.localConsumer;
  var __super_localConsumer = this.localConsumer;
  var __super_sender = this.sender;
  var __super_sender = this.sender;
  var __super_publisher = this.publisher;
  var __super_publisher = this.publisher;
  var __super_addOutboundInterceptor = this.addOutboundInterceptor;
  var __super_removeOutboundInterceptor = this.removeOutboundInterceptor;
  var __super_addInboundInterceptor = this.addInboundInterceptor;
  var __super_removeInboundInterceptor = this.removeInboundInterceptor;
  /**
   Whether the metrics are enabled for this measured object

   @public

   @return {boolean} <code>true</code> if metrics are enabled
   */
  this.isMetricsEnabled =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_eventBus["isMetricsEnabled()"]() ;
    } else if (typeof __super_isMetricsEnabled != 'undefined') {
      return __super_isMetricsEnabled.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link EventBus#send} but specifying a <code>replyHandler</code> that will be called if the recipient
   subsequently replies to the message.

   @public
   @param address {string} the address to send it to 
   @param message {Object} the message, may be <code>null</code> 
   @param options {Object} delivery options 
   @param replyHandler {function} reply handler will be called when any reply from the recipient is received, may be <code>null</code> 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.send =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] !== 'function') {
      j_eventBus["send(java.lang.String,java.lang.Object)"](__args[0], utils.convParamTypeUnknown(__args[1])) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] !== 'function' && typeof __args[2] === 'function') {
      j_eventBus["send(java.lang.String,java.lang.Object,io.vertx.core.Handler)"](__args[0], utils.convParamTypeUnknown(__args[1]), function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnVertxGen(Message, ar.result(), undefined), null);
        } else {
          __args[2](null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] !== 'function' && (typeof __args[2] === 'object' && __args[2] != null)) {
      j_eventBus["send(java.lang.String,java.lang.Object,io.vertx.core.eventbus.DeliveryOptions)"](__args[0], utils.convParamTypeUnknown(__args[1]), __args[2]  != null ? new DeliveryOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null) ;
      return that;
    } else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] !== 'function' && (typeof __args[2] === 'object' && __args[2] != null) && typeof __args[3] === 'function') {
      j_eventBus["send(java.lang.String,java.lang.Object,io.vertx.core.eventbus.DeliveryOptions,io.vertx.core.Handler)"](__args[0], utils.convParamTypeUnknown(__args[1]), __args[2]  != null ? new DeliveryOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[3](utils.convReturnVertxGen(Message, ar.result(), undefined), null);
        } else {
          __args[3](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_send != 'undefined') {
      return __super_send.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link EventBus#publish} but specifying <code>options</code> that can be used to configure the delivery.

   @public
   @param address {string} the address to publish it to 
   @param message {Object} the message, may be <code>null</code> 
   @param options {Object} the delivery options 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.publish =  function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] !== 'function') {
      j_eventBus["publish(java.lang.String,java.lang.Object)"](__args[0], utils.convParamTypeUnknown(__args[1])) ;
      return that;
    } else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] !== 'function' && (typeof __args[2] === 'object' && __args[2] != null)) {
      j_eventBus["publish(java.lang.String,java.lang.Object,io.vertx.core.eventbus.DeliveryOptions)"](__args[0], utils.convParamTypeUnknown(__args[1]), __args[2]  != null ? new DeliveryOptions(new JsonObject(Java.asJSONCompatible(__args[2]))) : null) ;
      return that;
    } else if (typeof __super_publish != 'undefined') {
      return __super_publish.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Create a consumer and register it against the specified address.

   @public
   @param address {string} the address that will register it at 
   @param handler {function} the handler that will process the received messages 
   @return {MessageConsumer} the event bus message consumer
   */
  this.consumer =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(MessageConsumer, j_eventBus["consumer(java.lang.String)"](__args[0]), undefined) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(MessageConsumer, j_eventBus["consumer(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(Message, jVal, undefined));
      }), undefined) ;
    } else if (typeof __super_consumer != 'undefined') {
      return __super_consumer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link EventBus#consumer} but the address won't be propagated across the cluster.

   @public
   @param address {string} the address that will register it at 
   @param handler {function} the handler that will process the received messages 
   @return {MessageConsumer} the event bus message consumer
   */
  this.localConsumer =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(MessageConsumer, j_eventBus["localConsumer(java.lang.String)"](__args[0]), undefined) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(MessageConsumer, j_eventBus["localConsumer(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
        __args[1](utils.convReturnVertxGen(Message, jVal, undefined));
      }), undefined) ;
    } else if (typeof __super_localConsumer != 'undefined') {
      return __super_localConsumer.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link EventBus#sender} but specifying delivery options that will be used for configuring the delivery of
   the message.

   @public
   @param address {string} the address to send it to 
   @param options {Object} the delivery options 
   @return {MessageProducer} The sender
   */
  this.sender =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(MessageProducer, j_eventBus["sender(java.lang.String)"](__args[0]), undefined) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null)) {
      return utils.convReturnVertxGen(MessageProducer, j_eventBus["sender(java.lang.String,io.vertx.core.eventbus.DeliveryOptions)"](__args[0], __args[1]  != null ? new DeliveryOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null), undefined) ;
    } else if (typeof __super_sender != 'undefined') {
      return __super_sender.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link EventBus#publisher} but specifying delivery options that will be used for configuring the delivery of
   the message.

   @public
   @param address {string} the address to publish it to 
   @param options {Object} the delivery options 
   @return {MessageProducer} The publisher
   */
  this.publisher =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(MessageProducer, j_eventBus["publisher(java.lang.String)"](__args[0]), undefined) ;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && (typeof __args[1] === 'object' && __args[1] != null)) {
      return utils.convReturnVertxGen(MessageProducer, j_eventBus["publisher(java.lang.String,io.vertx.core.eventbus.DeliveryOptions)"](__args[0], __args[1]  != null ? new DeliveryOptions(new JsonObject(Java.asJSONCompatible(__args[1]))) : null), undefined) ;
    } else if (typeof __super_publisher != 'undefined') {
      return __super_publisher.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add an interceptor that will be called whenever a message is sent from Vert.x

   @public
   @param interceptor {function} the interceptor 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.addOutboundInterceptor =  function(interceptor) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_eventBus["addOutboundInterceptor(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(DeliveryContext, jVal, undefined));
      }) ;
      return that;
    } else if (typeof __super_addOutboundInterceptor != 'undefined') {
      return __super_addOutboundInterceptor.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove an interceptor that was added by {@link EventBus#addOutboundInterceptor}

   @public
   @param interceptor {function} the interceptor 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.removeOutboundInterceptor =  function(interceptor) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_eventBus["removeOutboundInterceptor(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(DeliveryContext, jVal, undefined));
      }) ;
      return that;
    } else if (typeof __super_removeOutboundInterceptor != 'undefined') {
      return __super_removeOutboundInterceptor.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add an interceptor that will be called whenever a message is received by Vert.x

   @public
   @param interceptor {function} the interceptor 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.addInboundInterceptor =  function(interceptor) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_eventBus["addInboundInterceptor(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(DeliveryContext, jVal, undefined));
      }) ;
      return that;
    } else if (typeof __super_addInboundInterceptor != 'undefined') {
      return __super_addInboundInterceptor.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove an interceptor that was added by {@link EventBus#addInboundInterceptor}

   @public
   @param interceptor {function} the interceptor 
   @return {EventBus} a reference to this, so the API can be used fluently
   */
  this.removeInboundInterceptor =  function(interceptor) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_eventBus["removeInboundInterceptor(io.vertx.core.Handler)"](function(jVal) {
        __args[0](utils.convReturnVertxGen(DeliveryContext, jVal, undefined));
      }) ;
      return that;
    } else if (typeof __super_removeInboundInterceptor != 'undefined') {
      return __super_removeInboundInterceptor.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_eventBus;
};

EventBus._jclass = utils.getJavaClass("io.vertx.core.eventbus.EventBus");
EventBus._jtype = {accept: function(obj) {
    return EventBus._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(EventBus.prototype, {});
    EventBus.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
EventBus._create = function(jdel) {var obj = Object.create(EventBus.prototype, {});
  EventBus.apply(obj, arguments);
  return obj;
}
module.exports = EventBus;