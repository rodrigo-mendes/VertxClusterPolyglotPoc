package io.everis.inno.vertx.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.MessageConsumer;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class JavaEventBusVerticleConsumerJs extends AbstractVerticle {
    private final Logger log = LoggerFactory.getLogger(JavaEventBusVerticleConsumerJs.class);
    @Override
    public void start(Future<Void> future) {
        EventBus eb = vertx.eventBus();
        MessageConsumer<String> consumer = eb.consumer("vertx.js.sender.msg");
        consumer.handler(message -> {
            log.info("I have received a message: " + message.body());
        });
    }
}