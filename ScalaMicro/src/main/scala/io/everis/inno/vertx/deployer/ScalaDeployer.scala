package io.everis.inno.vertx.deployer

import io.everis.inno.vertx.infra.ServiceDiscoveryPublisher
import io.everis.inno.vertx.verticle.{ScalaConsumerEventBusVerticleJS, ScalaConsumerEventBusVerticleJava, ScalaFileReaderVerticle, ScalaFileSystemPersistentVerticle, ScalaRouterVerticle, SenderEventBusScalaVerticle}
import io.vertx.lang.scala.{ScalaLogger, ScalaVerticle}

import scala.util.{Failure, Success}

class ScalaDeployer extends ServiceDiscoveryPublisher {

  private val log = ScalaLogger.getLogger(classOf[ServiceDiscoveryPublisher].getName)

  override def start(): Unit = {

    log.info("Deploy Init")
//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[SenderEventBusScalaVerticle]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("SenderEventBusScalaVerticle is deployed")
//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[ScalaConsumerEventBusVerticleJS]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("ScalaConsumerEventBusVerticleJS is deployed")
//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[ScalaConsumerEventBusVerticleJava]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("ScalaConsumerEventBusVerticleJava is deployed")

    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[ScalaRouterVerticle]).onComplete{
      case Success(s) =>log.info(s"Verticle id is: $s") // <3>
      case Failure(t) => t.printStackTrace()
    }
    log.info("ScalaRouterVerticle is deployed")

//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[ScalaFileSystemPersistentVerticle]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("ScalaFileSystemPersistentVerticle is deployed")

//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[ScalaFileReaderVerticle]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("ScalaFileReaderVerticle is deployed")

//    vertx.deployVerticleFuture(ScalaVerticle.nameForVerticle[SenderEventBusScalaVerticle]).onComplete{
//      case Success(s) => println(s"Verticle id is: $s") // <3>
//      case Failure(t) => t.printStackTrace()
//    }
//    log.info("SenderEventBusScalaVerticle is deployed")

  }

}