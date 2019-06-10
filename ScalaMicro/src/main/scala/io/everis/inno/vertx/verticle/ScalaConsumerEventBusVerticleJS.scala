package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}

class ScalaConsumerEventBusVerticleJS extends ScalaVerticle {

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[ScalaConsumerEventBusVerticleJS])
    val eb = vertx.eventBus()

    val consumer = eb.consumer("vertx.js.sender.msg")
    consumer.handler((message) => {
      log.info(s"I have received a message: ${message.body()}","")
    })
  }
}