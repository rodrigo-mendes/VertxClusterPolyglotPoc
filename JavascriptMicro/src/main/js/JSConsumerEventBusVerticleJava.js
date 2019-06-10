var eb = vertx.eventBus();

var consumer = eb.consumer("vertx.java.sender.msg");
consumer.handler(function (message) {
  console.log("I have received a message: " + message.body());
});