package io.everis.inno.gatling

import io.gatling.core.Predef.{constantUsersPerSec, rampUsersPerSec, _}
import io.gatling.http.Predef._

import scala.concurrent.duration._

class StressLoadPostReplySimulationParallel extends Simulation {

  val httpProtocol = http.baseUrl("http://127.0.0.1:8082").warmUp("http://127.0.0.1:8082")

  val scn = scenario("Post with 1 user")
    .exec(
      http("PostRequestReply")
        .post("/reply")
        .check(status.is(200))
        .header(HttpHeaderNames.ContentType, HttpHeaderValues.ApplicationJson)
        .header(HttpHeaderNames.Accept, HttpHeaderValues.ApplicationJson)
        .body(RawFileBody("22_v2"))

    )
    //.pause(10 seconds)

    setUp(
      scn.inject(
        //nothingFor(2 seconds),
        atOnceUsers(1100)
  //      incrementConcurrentUsers(27) // Int
  //        .times(100)
  //        .eachLevelLasting(10 seconds)
  //        .separatedByRampsLasting(10 seconds)
  //        .startingFrom(27) // Int
  //        constantUsersPerSec(100) during (2 minutes)
  //          rampUsersPerSec(27) to 54 during (2 minutes)
  )
  //    scn.inject(
  //      incrementUsersPerSec(5) // Double
  //        .times(5)
  //        .eachLevelLasting(10 seconds)
  //        .separatedByRampsLasting(10 seconds)
  //        .startingFrom(10) // Double
  //    )
    ).protocols(httpProtocol).maxDuration(10 minutes)

//  setUp(scn.inject(constantUsersPerSec(20) during ( 30 seconds))).throttle(
//    reachRps(10) in (10 seconds),
//    holdFor(1 minute),
//    jumpToRps(50),
//    holdFor(2 minute)
//  ).protocols(httpProtocol).maxDuration(10 minutes)
}