package io.everis.inno.vertx.infra

import io.vertx.lang.scala.ScalaVerticle
import io.vertx.scala.core.eventbus.DeliveryOptions

trait SenderMessage extends ScalaVerticle{

  def publish (address: String, message: AnyRef,options: DeliveryOptions = DeliveryOptions()) = {
    vertx.eventBus().publish(address, message, options)
  }

  def send (address: String, message: AnyRef,options: DeliveryOptions = DeliveryOptions()) = {
    vertx.eventBus().send(address, message, options)
  }

  def sendFuture(address: String, message: AnyRef,options: DeliveryOptions = DeliveryOptions()) = {
    vertx.eventBus().sendFuture(address, message, options)
  }

}
