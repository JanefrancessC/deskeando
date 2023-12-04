import http from "node:http";

import app from "./app.js";
import { connectDb, disconnectDb } from "./db.js";
import config from "./utils/config.js";
import logger from "./utils/logger.js";

const server = http.createServer(app);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info("listening on: %s", bind);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(config.port));
