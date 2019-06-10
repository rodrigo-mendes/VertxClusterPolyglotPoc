var eventBus = vertx.eventBus();

eventBus.publish("vertx.js.sender.msg", "JSEventBusVerticleSender is Alive!!!!!!");