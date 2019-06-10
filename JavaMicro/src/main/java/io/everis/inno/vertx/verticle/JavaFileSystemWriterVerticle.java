package io.everis.inno.vertx.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.MessageConsumer;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;

public class JavaFileSystemWriterVerticle extends AbstractVerticle {

    private long counter = 0;

    @Override
    public void start(Future<Void> future) {
        Logger log = LoggerFactory.getLogger(JavaFileSystemWriterVerticle.class);
        EventBus eb = vertx.eventBus();
        MessageConsumer<String> consumer = eb.consumer("json.stress.communication.content");
        consumer.handler(message -> {
            log.info("I have received a message: " + message.body());
            counter ++;
            vertx.fileSystem().writeFile("22_v2."+counter, Buffer.buffer(message.body()), result -> {
                if (result.succeeded()) {
                    log.info("File written");
                } else {
                    log.info("Oh oh ..." + result.cause());
                }
            });
        });
    }
}