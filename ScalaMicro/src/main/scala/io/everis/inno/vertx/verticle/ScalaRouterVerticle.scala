package io.everis.inno.vertx.verticle

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.lang.scala.ScalaLogger
import io.vertx.scala.ext.web.handler.BodyHandler
import io.vertx.scala.ext.web.{Router, RoutingContext}

import scala.concurrent.Future
import scala.util.{Failure, Success}

class ScalaRouterVerticle extends ScalaVerticle {

  var getCounter: Long = 0
  var postCounter: Long = 0
  var postCounterJson: Long = 0

  override def startFuture(): Future[Unit] = {
    val log: ScalaLogger = ScalaLogger.getLogger("ScalaRouterVerticle")
    val router = Router.router(vertx)
    val eventBus = vertx.eventBus()

    router.get("/").handler((routingContext: RoutingContext) => {
      getCounter = getCounter + 1
      eventBus.publish("json.stress.communication","Message number: " + getCounter)
      routingContext.response().end()
    })

    router.route("/*").handler(BodyHandler.create())
    router.post("/")
                      .consumes("*/json").handler((routingContext: RoutingContext) => {
      postCounter = postCounter + 1
//      log.info("routingContext.getBody() = " + routingContext.getBody().get)
//      eventBus.publish("json.stress.communication.content", Buffer.buffer(routingContext.getBody().toString)) //Buffer.buffer(message.body().toString)
      eventBus.publish("json.stress.communication.content", routingContext.getBody().toString) //Buffer.buffer(message.body().toString)
      routingContext.response().end()
    })

    router.route("/reply/*").handler(BodyHandler.create())
    router.post("/reply/")
      .consumes("*/json").handler((routingContext: RoutingContext) => {
//        val future: Future[Message[String]] = eventBus.sendFuture("json.stress.communication.content.reply", routingContext.getBody().toString)
//        future.onComplete {
//          case Success(result) => {
//            log.info("!!!!! " + result + " !!!!!")
//            routingContext.response().setStatusCode(200).end()
//          }
//          case Failure(cause) =>  {
//            log.info("!!!!! " + cause + " !!!!!")
//            routingContext.response().setStatusCode(404).end(cause.toString)
//          }
//        }

      eventBus.sendFuture[String]("json.stress.communication.content.reply", routingContext.getBody().toString).onComplete {
        case Success(result) => {
          postCounterJson = postCounterJson + 1
          log.info("!!!!! " + result + " !!!!!")
          log.info("!!!!! Message = " + postCounterJson + " !!!!!")

          routingContext.response().setStatusCode(200).end()
        }
        case Failure(cause) =>  {
          postCounterJson = postCounterJson + 1
          log.info("!!!!! " + cause + " !!!!!")
          log.info("!!!!! Message = " + postCounterJson + " !!!!!")
          routingContext.response().setStatusCode(404).end(cause.toString)
        }
      }
      })

    vertx //<4>
      .createHttpServer()
      .requestHandler(router.accept)
      .listenFuture(8082, "127.0.0.1")  // <5>
      .map(_ => ()) // <6>
  }

  override def stopFuture(): Future[Unit] = {
    println("stopping")
    Future.successful(())
  }
}