package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}


class SenderEventBusScalaVerticle extends ScalaVerticle {

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[SenderEventBusScalaVerticle])
    log.info( "Running Verticle" ,"")
    val eb = vertx.eventBus
    eb.publish("vertx.scala.sender.msg", "scalaEventBusVerticleSender is Alive!!!!!!")
  }

}
