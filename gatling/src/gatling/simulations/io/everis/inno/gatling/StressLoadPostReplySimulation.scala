package io.everis.inno.gatling

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class StressLoadPostReplySimulation extends Simulation {

  val httpProtocol = http.baseUrl("http://127.0.0.1:8082").warmUp("http://google.com/")

  val scn = scenario("Post with 1 users")
    .exec(
        http("PostRequestReply")
          .post("/reply")
          .check(status.is(200))
          .header(HttpHeaderNames.ContentType, HttpHeaderValues.ApplicationJson)
          .header(HttpHeaderNames.Accept, HttpHeaderValues.ApplicationJson)
          .body(RawFileBody("22_v2"))

    )
    .pause(5)
//
//  val scn10 = scn.copy( "Post with 10 users")
//  val scn100 = scn.copy("Post with 100 users")
//  val scn200 = scn.copy("Post with 100 users")
//  val scn300 = scn.copy("Post with 100 users")
//  val scn1000 = scn.copy("Post with 1000 users")

  setUp(
    scn.inject(
      nothingFor(4 seconds), // 1
      atOnceUsers(27), // 2
      rampUsers(10) during (5 seconds), // 3
      constantUsersPerSec(20) during (15 seconds), // 4
      constantUsersPerSec(20) during (15 seconds) randomized, // 5
      rampUsersPerSec(10) to 20 during (10 minutes), // 6
      rampUsersPerSec(10) to 20 during (10 minutes) randomized, // 7
      heavisideUsers(1000) during (20 seconds) // 8
    )
  ).protocols(httpProtocol).maxDuration(10 minutes)
}