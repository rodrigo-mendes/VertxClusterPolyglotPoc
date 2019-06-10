package io.everis.inno.vertx.launcher;

import io.everis.inno.vertx.verticle.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class MessageDeployer extends AbstractVerticle {

    @Override
    public void start(Future<Void> future) {
//    public void start() {
          Logger log = LoggerFactory.getLogger(MessageDeployer.class);
//        vertx.deployVerticle(new JavaEventBusVerticleSender(), res -> {
//            if (res.succeeded()) {
//                log.info("Deployment id is: " + res.result());
//            } else {
//                log.info("Deployment failed!");
//            }
//        });
//
//        vertx.deployVerticle(new JavaEventBusVerticleConsumerJs(), res -> {
//            if (res.succeeded()) {
//                log.info("Deployment id is: " + res.result());
//            } else {
//                log.info("Deployment failed!");
//            }
//        });
//
//        vertx.deployVerticle(new JavaEventBusVerticleConsumerScala(), res -> {
//            if (res.succeeded()) {
//                log.info("Deployment id is: " + res.result());
//            } else {
//                log.info("Deployment failed!");
//            }
//        });

//        vertx.deployVerticle(new JavaFileSystemWriterVerticle(), res -> {
//            if (res.succeeded()) {
//                log.info("Deployment id is: " + res.result());
//            } else {
//                log.info("Deployment failed!");
//            }
//        });

        vertx.deployVerticle(new JavaReplyMessageVerticle(), res -> {
            if (res.succeeded()) {
                log.info("Deployment id is: " + res.result());
            } else {
                log.info("Deployment failed!");
            }
        });
        future.complete();
    }
}
