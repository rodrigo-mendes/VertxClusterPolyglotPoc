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

/** @module vertx-js/web_socket_base */
var utils = require('vertx-js/util/utils');
var Pipe = require('vertx-js/pipe');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var WebSocketFrame = require('vertx-js/web_socket_frame');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JWebSocketBase = Java.type('io.vertx.core.http.WebSocketBase');

/**
 Base WebSocket implementation.
 <p>
 @class
*/
var WebSocketBase = function(j_val) {

  var j_webSocketBase = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  WriteStream.call(this, j_val);

  var __super_end = this.end;
  var __super_end = this.end;
  var __super_writeQueueFull = this.writeQueueFull;
  var __super_pipe = this.pipe;
  var __super_pipeTo = this.pipeTo;
  var __super_pipeTo = this.pipeTo;
  var __super_exceptionHandler = this.exceptionHandler;
  var __super_handler = this.handler;
  var __super_pause = this.pause;
  var __super_resume = this.resume;
  var __super_fetch = this.fetch;
  var __super_endHandler = this.endHandler;
  var __super_write = this.write;
  var __super_write = this.write;
  var __super_setWriteQueueMaxSize = this.setWriteQueueMaxSize;
  var __super_drainHandler = this.drainHandler;
  var __super_binaryHandlerID = this.binaryHandlerID;
  var __super_textHandlerID = this.textHandlerID;
  var __super_subProtocol = this.subProtocol;
  var __super_writeFrame = this.writeFrame;
  var __super_writeFrame = this.writeFrame;
  var __super_writeFinalTextFrame = this.writeFinalTextFrame;
  var __super_writeFinalTextFrame = this.writeFinalTextFrame;
  var __super_writeFinalBinaryFrame = this.writeFinalBinaryFrame;
  var __super_writeFinalBinaryFrame = this.writeFinalBinaryFrame;
  var __super_writeBinaryMessage = this.writeBinaryMessage;
  var __super_writeBinaryMessage = this.writeBinaryMessage;
  var __super_writeTextMessage = this.writeTextMessage;
  var __super_writeTextMessage = this.writeTextMessage;
  var __super_writePing = this.writePing;
  var __super_writePong = this.writePong;
  var __super_closeHandler = this.closeHandler;
  var __super_frameHandler = this.frameHandler;
  var __super_textMessageHandler = this.textMessageHandler;
  var __super_binaryMessageHandler = this.binaryMessageHandler;
  var __super_pongHandler = this.pongHandler;
  var __super_end = this.end;
  var __super_end = this.end;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_close = this.close;
  var __super_remoteAddress = this.remoteAddress;
  var __super_localAddress = this.localAddress;
  var __super_isSsl = this.isSsl;
  /**
   Calls {@link WebSocketBase#close}

   @public
   @param handler {function} 
   */
  this.end =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["end(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["end(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 0) {
      j_webSocketBase["end()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["end(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_end != 'undefined') {
      return __super_end.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link WebSocketBase#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["writeQueueFull()"]() ;
    } else if (typeof __super_writeQueueFull != 'undefined') {
      return __super_writeQueueFull.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Pause this stream and return a  to transfer the elements of this stream to a destination .
   <p/>
   The stream will be resumed when the pipe will be wired to a <code>WriteStream</code>.

   @public

   @return {Pipe} a pipe
   */
  this.pipe =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Pipe, j_webSocketBase["pipe()"](), Buffer._jtype) ;
    } else if (typeof __super_pipe != 'undefined') {
      return __super_pipe.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Pipe this <code>ReadStream</code> to the <code>WriteStream</code>.
   <p>
   Elements emitted by this stream will be written to the write stream until this stream ends or fails.
   <p>
   Once this stream has ended or failed, the write stream will be ended and the <code>handler</code> will be
   called with the result.

   @public
   @param dst {WriteStream} the destination write stream 
   @param handler {function} 
   */
  this.pipeTo =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["pipeTo(io.vertx.core.streams.WriteStream)"](__args[0]._jdel);
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["pipeTo(io.vertx.core.streams.WriteStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_pipeTo != 'undefined') {
      return __super_pipeTo.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.exceptionHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["exceptionHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnThrowable(jVal));
      }) ;
      return that;
    } else if (typeof __super_exceptionHandler != 'undefined') {
      return __super_exceptionHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.handler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["handler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_handler != 'undefined') {
      return __super_handler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {WebSocketBase}
   */
  this.pause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["pause()"]() ;
      return that;
    } else if (typeof __super_pause != 'undefined') {
      return __super_pause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {WebSocketBase}
   */
  this.resume =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["resume()"]() ;
      return that;
    } else if (typeof __super_resume != 'undefined') {
      return __super_resume.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param amount {number} 
   @return {WebSocketBase}
   */
  this.fetch =  function(amount) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_webSocketBase["fetch(long)"](__args[0]) ;
      return that;
    } else if (typeof __super_fetch != 'undefined') {
      return __super_fetch.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param endHandler {function} 
   @return {WebSocketBase}
   */
  this.endHandler =  function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["endHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_endHandler != 'undefined') {
      return __super_endHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param data {Buffer} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.write =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["write(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["write(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_write != 'undefined') {
      return __super_write.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param maxSize {number} 
   @return {WebSocketBase}
   */
  this.setWriteQueueMaxSize =  function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_webSocketBase["setWriteQueueMaxSize(int)"](__args[0]) ;
      return that;
    } else if (typeof __super_setWriteQueueMaxSize != 'undefined') {
      return __super_setWriteQueueMaxSize.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.drainHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["drainHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_drainHandler != 'undefined') {
      return __super_drainHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   When a <code>WebSocket</code> is created it automatically registers an event handler with the event bus - the ID of that
   handler is given by this method.
   <p>
   Given this ID, a different event loop can send a binary frame to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying connection. This
   allows you to write data to other WebSockets which are owned by different event loops.

   @public

   @return {string} the binary handler id
   */
  this.binaryHandlerID =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["binaryHandlerID()"]() ;
    } else if (typeof __super_binaryHandlerID != 'undefined') {
      return __super_binaryHandlerID.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   When a <code>WebSocket</code> is created it automatically registers an event handler with the eventbus, the ID of that
   handler is given by <code>textHandlerID</code>.
   <p>
   Given this ID, a different event loop can send a text frame to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying connection. This
   allows you to write data to other WebSockets which are owned by different event loops.

   @public

   @return {string}
   */
  this.textHandlerID =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["textHandlerID()"]() ;
    } else if (typeof __super_textHandlerID != 'undefined') {
      return __super_textHandlerID.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the WebSocket sub protocol selected by the WebSocket handshake.
   <p/>
   On the server, the value will be <code>null</code> when the handler receives the websocket callback as the
   handshake will not be completed yet.

   @public

   @return {string}
   */
  this.subProtocol =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["subProtocol()"]() ;
    } else if (typeof __super_subProtocol != 'undefined') {
      return __super_subProtocol.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WebSocketBase#writeFrame} but with an <code>handler</code> called when the operation completes

   @public
   @param frame {WebSocketFrame} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.writeFrame =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writeFrame(io.vertx.core.http.WebSocketFrame)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["writeFrame(io.vertx.core.http.WebSocketFrame,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeFrame != 'undefined') {
      return __super_writeFrame.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WebSocketBase#writeFinalTextFrame} but with an <code>handler</code> called when the operation completes

   @public
   @param text {string} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.writeFinalTextFrame =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_webSocketBase["writeFinalTextFrame(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_webSocketBase["writeFinalTextFrame(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeFinalTextFrame != 'undefined') {
      return __super_writeFinalTextFrame.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WebSocketBase#writeFinalBinaryFrame} but with an <code>handler</code> called when the operation completes

   @public
   @param data {Buffer} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.writeFinalBinaryFrame =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writeFinalBinaryFrame(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["writeFinalBinaryFrame(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeFinalBinaryFrame != 'undefined') {
      return __super_writeFinalBinaryFrame.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WebSocketBase#writeBinaryMessage} but with an <code>handler</code> called when the operation completes

   @public
   @param data {Buffer} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.writeBinaryMessage =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writeBinaryMessage(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_webSocketBase["writeBinaryMessage(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeBinaryMessage != 'undefined') {
      return __super_writeBinaryMessage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WebSocketBase#writeTextMessage} but with an <code>handler</code> called when the operation completes

   @public
   @param text {string} 
   @param handler {function} 
   @return {WebSocketBase}
   */
  this.writeTextMessage =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_webSocketBase["writeTextMessage(java.lang.String)"](__args[0]) ;
      return that;
    } else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_webSocketBase["writeTextMessage(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_writeTextMessage != 'undefined') {
      return __super_writeTextMessage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Writes a ping frame to the connection. This will be written in a single frame. Ping frames may be at most 125 bytes (octets).
   <p>
   This method should not be used to write application data and should only be used for implementing a keep alive or
   to ensure the client is still responsive, see RFC 6455 Section <a href="https://tools.ietf.org/html/rfc6455#section-5.5.2">section 5.5.2</a>.
   <p>
   There is no handler for ping frames because RFC 6455  clearly
   states that the only response to a ping frame is a pong frame with identical contents.

   @public
   @param data {Buffer} the data to write, may be at most 125 bytes 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.writePing =  function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writePing(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (typeof __super_writePing != 'undefined') {
      return __super_writePing.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Writes a pong frame to the connection. This will be written in a single frame. Pong frames may be at most 125 bytes (octets).
   <p>
   This method should not be used to write application data and should only be used for implementing a keep alive or
   to ensure the client is still responsive, see RFC 6455 <a href="https://tools.ietf.org/html/rfc6455#section-5.5.2">section 5.5.2</a>.
   <p>
   There is no need to manually write a pong frame, as the server and client both handle responding to a ping from with a pong from
   automatically and this is exposed to users. RFC 6455 <a href="https://tools.ietf.org/html/rfc6455#section-5.5.3">section 5.5.3</a> states that pongs may be sent unsolicited in order
   to implement a one way heartbeat.

   @public
   @param data {Buffer} the data to write, may be at most 125 bytes 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.writePong =  function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_webSocketBase["writePong(io.vertx.core.buffer.Buffer)"](__args[0]._jdel) ;
      return that;
    } else if (typeof __super_writePong != 'undefined') {
      return __super_writePong.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a close handler. This will be called when the WebSocket is closed.
   <p/>
   After this callback, no more messages are expected.

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.closeHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["closeHandler(io.vertx.core.Handler)"](__args[0]) ;
      return that;
    } else if (typeof __super_closeHandler != 'undefined') {
      return __super_closeHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a frame handler on the connection. This handler will be called when frames are read on the connection.

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.frameHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["frameHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(WebSocketFrame, jVal));
      }) ;
      return that;
    } else if (typeof __super_frameHandler != 'undefined') {
      return __super_frameHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a text message handler on the connection. This handler will be called similar to the
   , but the buffer will be converted to a String first

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.textMessageHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["textMessageHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](jVal);
      }) ;
      return that;
    } else if (typeof __super_textMessageHandler != 'undefined') {
      return __super_textMessageHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a binary message handler on the connection. This handler serves a similar purpose to {@link WebSocketBase#handler}
   except that if a message comes into the socket in multiple frames, the data from the frames will be aggregated
   into a single buffer before calling the handler (using {@link WebSocketFrame#isFinal} to find the boundaries).

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.binaryMessageHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["binaryMessageHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_binaryMessageHandler != 'undefined') {
      return __super_binaryMessageHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a pong frame handler on the connection.  This handler will be invoked every time a pong frame is received
   on the server, and can be used by both clients and servers since the RFC 6455 <a href="https://tools.ietf.org/html/rfc6455#section-5.5.2">section 5.5.2</a> and <a href="https://tools.ietf.org/html/rfc6455#section-5.5.3">section 5.5.3</a> do not
   specify whether the client or server sends a ping.
   <p>
   Pong frames may be at most 125 bytes (octets).
   <p>
   There is no ping handler since ping frames should immediately be responded to with a pong frame with identical content
   <p>
   Pong frames may be received unsolicited.

   @public
   @param handler {function} the handler 
   @return {WebSocketBase} a reference to this, so the API can be used fluently
   */
  this.pongHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_webSocketBase["pongHandler(io.vertx.core.Handler)"](__args[0] == null ? null : function(jVal) {
        __args[0](utils.convReturnVertxGen(Buffer, jVal));
      }) ;
      return that;
    } else if (typeof __super_pongHandler != 'undefined') {
      return __super_pongHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as  but with an <code>handler</code> called when the operation completes

   @public
   @param statusCode {number} 
   @param reason {string} 
   @param handler {function} 
   */
  this.close =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_webSocketBase["close()"]();
    } else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_webSocketBase["close(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (__args.length === 1 && typeof __args[0] ==='number') {
      j_webSocketBase["close(short)"](__args[0]);
    } else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      j_webSocketBase["close(short,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (__args.length === 2 && typeof __args[0] ==='number' && (typeof __args[1] === 'string' || __args[1] == null)) {
      j_webSocketBase["close(short,java.lang.String)"](__args[0], __args[1]);
    } else if (__args.length === 3 && typeof __args[0] ==='number' && (typeof __args[1] === 'string' || __args[1] == null) && typeof __args[2] === 'function') {
      j_webSocketBase["close(short,java.lang.String,io.vertx.core.Handler)"](__args[0], __args[1], function(ar) {
        if (ar.succeeded()) {
          __args[2](null, null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (typeof __super_close != 'undefined') {
      return __super_close.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {SocketAddress} the remote address for this socket
   */
  this.remoteAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedremoteAddress == null) {
        that.cachedremoteAddress = utils.convReturnVertxGen(SocketAddress, j_webSocketBase["remoteAddress()"]());
      }
      return that.cachedremoteAddress;
    } else if (typeof __super_remoteAddress != 'undefined') {
      return __super_remoteAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {SocketAddress} the local address for this socket
   */
  this.localAddress =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = utils.convReturnVertxGen(SocketAddress, j_webSocketBase["localAddress()"]());
      }
      return that.cachedlocalAddress;
    } else if (typeof __super_localAddress != 'undefined') {
      return __super_localAddress.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if this {@link HttpConnection} is encrypted via SSL/TLS.
   */
  this.isSsl =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketBase["isSsl()"]() ;
    } else if (typeof __super_isSsl != 'undefined') {
      return __super_isSsl.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_webSocketBase;
};

WebSocketBase._jclass = utils.getJavaClass("io.vertx.core.http.WebSocketBase");
WebSocketBase._jtype = {accept: function(obj) {
    return WebSocketBase._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(WebSocketBase.prototype, {});
    WebSocketBase.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
WebSocketBase._create = function(jdel) {var obj = Object.create(WebSocketBase.prototype, {});
  WebSocketBase.apply(obj, arguments);
  return obj;
}
module.exports = WebSocketBase;