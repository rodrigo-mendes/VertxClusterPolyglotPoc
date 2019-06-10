package io.everis.inno.vertx.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;


public class JavaEventBusVerticleSender extends AbstractVerticle {

    private final Logger log = LoggerFactory.getLogger(JavaEventBusVerticleSender.class);

    @Override
    public void start(Future<Void> future) {
        EventBus eb = vertx.eventBus();
        eb.send("vertx.java.sender.msg", "JavaEventBusVerticleSender is Alive!!!!!!");
        log.info("Sended message to vertx.java.sender.msg");
    }
}