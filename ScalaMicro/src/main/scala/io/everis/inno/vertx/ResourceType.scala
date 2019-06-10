package io.everis.inno.vertx

package object infra {
  sealed trait ResourceTypes

  case object EventBusResource extends ResourceTypes
  case object HttpEndpoint extends ResourceTypes
  case object MessageSource extends ResourceTypes
  case object JDBCDataSource extends ResourceTypes
  case object RedisDataSource extends ResourceTypes
  case object MongoDataSource extends ResourceTypes
}
