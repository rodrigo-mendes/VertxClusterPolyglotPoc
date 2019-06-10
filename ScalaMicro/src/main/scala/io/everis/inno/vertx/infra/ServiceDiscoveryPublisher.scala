package io.everis.inno.vertx.infra

import io.vertx.core.json.JsonObject
import io.vertx.lang.scala.{ScalaLogger, ScalaVerticle}
import io.vertx.scala.servicediscovery._
import io.vertx.scala._

import scala.util.{Failure, Success}

trait ServiceDiscoveryPublisher extends ScalaVerticle {

  private val log = ScalaLogger.getLogger(classOf[ServiceDiscoveryPublisher].getName)

  private def serviceDiscovery = {
    servicediscovery.ServiceDiscovery.create( vertx, ServiceDiscoveryOptions().setName("Service-Discovery"))
  }

 def publishService(resourceType: ResourceTypes)(configService: ConfigService, config: JsonObject = new JsonObject()) = {
   resourceType match {
     case EventBusResource => {
       val record = types.EventBusService.createRecord(configService.serviceName, // The service name
         configService.address, // the service address,
         configService.serviceInterface.toString, // "service.interface"
         config)
       publish(record)
     }
     case HttpEndpoint => {
       publish(types.HttpEndpoint.createRecord(configService.serviceName, configService.address, configService.port, configService.root))
     }
     case MessageSource => {
       val record = types.MessageSource.createRecord(
         configService.serviceName, // The service name
         configService.address, // The event bus address
         "message-source",
         config)
       publish(record)
     }
     case JDBCDataSource => {
       val record = types.JDBCDataSource.createRecord(
         configService.serviceName, // The service name
         new JsonObject().put("url", configService.url), // The location
         config // Some metadata
       )
       publish(record)
     }
     case RedisDataSource =>{
       val record = types.RedisDataSource.createRecord(
         configService.serviceName, // The service name
         new JsonObject().put("url", configService.url), // The location
         config // Some metadata
       )
       publish(record)
     }
     case MongoDataSource => {
       val record = types.MongoDataSource.createRecord(
         configService.serviceName, // The service name
         new JsonObject().put("connection_string", configService.url), // The location
         config // Some metadata
       )
       publish(record)
     }
   }
  }

  def publish(record: Record) = {
    serviceDiscovery publishFuture (record) onComplete {
      case Success(result) => {
        log.info(s" Service has been publish: $result")
      }
      case Failure(cause) => {
        log.error("Error to publish service: ", cause)
      }
    }
  }

}

