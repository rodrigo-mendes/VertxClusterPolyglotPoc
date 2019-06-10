package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}

class ScalaReplyContentVerticle  extends ScalaVerticle {

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[ScalaReplyContentVerticle])
    val eb = vertx.eventBus()

    val consumer = eb.consumer("json.stress.communication.content")
    consumer.handler((message) => {
      log.debug(s"I have received a message: ${message.body()}","")
      message.reply(message.body())
    })
  }
}