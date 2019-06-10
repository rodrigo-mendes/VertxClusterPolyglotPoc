package io.everis.inno.vertx.infra

import io.vertx.core.json.JsonObject
import io.vertx.lang.scala.{ScalaLogger, ScalaVerticle}
import io.vertx.scala._
import io.vertx.scala.servicediscovery._

trait ServiceDiscoveryConsumer extends ScalaVerticle {

  private val log = ScalaLogger.getLogger(classOf[ServiceDiscoveryPublisher].getName)

  private def serviceDiscovery = {
    servicediscovery.ServiceDiscovery.create( vertx , ServiceDiscoveryOptions()
      .setName("Service-Discovery"))
  }

  def consumeResource(resourceType: ResourceTypes)(filter: JsonObject, action: => Unit ): Unit ={
    resourceType match {
      case EventBusResource => {
        //TODO
      }

      case HttpEndpoint => {
        //TODO
      }
      case MessageSource => {
          types.MessageSource.getConsumer(serviceDiscovery, filter, reply => {
            if (reply.succeeded ){
                 val consumer = reply.result
                 consumer.handler( message =>{
                    val payload = message.body
                   log.info(s"Body Message: $payload")
                  })
            }else{
              log.error("Service Not found", reply.cause)
            }
          })
      }
      case JDBCDataSource => {
        //TODO
      }
      case RedisDataSource =>{
        //TODO
      }
      case MongoDataSource => {
        //TODO
      }
    }
  }

}

