package io.everis.inno.vertx.infra.executor

import io.vertx.core.json.JsonObject

trait EventBusServiceExecutor {

  def execute( action: => Unit) (jsonObject: JsonObject): Unit = {
    action
  }

}
