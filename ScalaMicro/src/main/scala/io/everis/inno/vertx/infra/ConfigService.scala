package io.everis.inno.vertx.infra


case class ConfigService(serviceName:String, address: String, port:Int = 0, serviceInterface: Class[_] = AnyRef.getClass, url: String = "", root: String = "/" )