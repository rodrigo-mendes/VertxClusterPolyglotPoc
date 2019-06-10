package io.everis.inno.vertx.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.MessageConsumer;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class JavaReplyMessageVerticle extends AbstractVerticle {

    private long counter = 0;

    @Override
    public void start(Future<Void> future) {
        Logger log = LoggerFactory.getLogger(JavaReplyMessageVerticle.class);
        EventBus eb = vertx.eventBus();
        MessageConsumer<String> consumer = eb.consumer("json.stress.communication.content.reply");
        consumer.handler(message -> {
            log.info("I have received a message number: " + counter++);
            message.reply(message.body());
        });
    }
}