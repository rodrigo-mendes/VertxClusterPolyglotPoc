package io.everis.inno.vertx.verticle;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;

public class HelloWorldVerticle extends AbstractVerticle {
    @Override
    public void start(Future<Void> future) {
        vertx.createHttpServer()
                .requestHandler(r -> r.response()
                        .end("Hello from Vert.x application")).listen(8080,
                result -> {
                    if (result.succeeded()) {
                        future.complete();
                    } else {
                        future.fail(result.cause());
                    }
                });
    }
}