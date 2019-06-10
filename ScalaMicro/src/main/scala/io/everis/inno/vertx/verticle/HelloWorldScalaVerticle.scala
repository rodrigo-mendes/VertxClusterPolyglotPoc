package io.everis.inno.vertx.verticle


import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}


class HelloWorldScalaVerticle extends ScalaVerticle {

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[HelloWorldScalaVerticle])
    var server = vertx.createHttpServer()
    log.info( "Running Verticle" ,"")
    server.requestHandler((request: io.vertx.scala.core.http.HttpServerRequest) => {
      request.response()
              .putHeader("content-type", "text/plain")
              .end("Hello World!")
    })
    server.listen(8081)
  }

}
