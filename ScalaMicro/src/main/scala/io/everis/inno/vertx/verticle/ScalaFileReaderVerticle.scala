package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}

import scala.util.{Failure, Success}

class ScalaFileReaderVerticle extends ScalaVerticle {

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[ScalaFileReaderVerticle])
    val eb = vertx.eventBus()

    val consumer = eb.consumer("json.stress.communication")
    consumer.handler((message) => {
      log.debug(s"I have received a message: ${message.body()}","")
      vertx.fileSystem().readFileFuture("22_v2").onComplete{
        case Success(result) => {
          eb.publish("json.stress.communication.content", result)
        }
        case Failure(cause) => {
          log.info(s"$cause","")
        }
      }
    })
  }
}