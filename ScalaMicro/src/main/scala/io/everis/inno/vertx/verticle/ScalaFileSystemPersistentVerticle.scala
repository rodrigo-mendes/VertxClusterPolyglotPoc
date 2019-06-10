package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.core.logging.{Logger, LoggerFactory}

import scala.util.{Failure, Success}

class ScalaFileSystemPersistentVerticle  extends ScalaVerticle {

  var counter = 0

  override def start(): Unit = {
    val log: Logger = LoggerFactory.getLogger(classOf[ScalaFileSystemPersistentVerticle])
    val eb = vertx.eventBus()

    val consumer = eb.consumer("json.stress.communication.content")
    consumer.handler((message) => {
      log.debug(s"I have received a message: ${message.body()}","")
      counter = counter + 1

      vertx.fileSystem().writeFileFuture("22_v2." + counter, message.body()).onComplete{
        case Success(result) => {
          log.info("File written","")
        }
        case Failure(cause) => {
          log.info(s"$cause","")
        }
      }
    })
  }
}