const redis = require("redis");

const client = redis.createClient({
  host: "redis-server" || "localhost",
  port: 6379,
});

client.on("error", (error) => {
  console.error(error);
});

module.exports = client;
