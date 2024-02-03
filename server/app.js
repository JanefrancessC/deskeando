import express from "express";

import apiRouter from "./api.js";
import config from "./utils/config.js";
import {
  clientRouter,
  configuredHelmet,
  configuredMorgan,
  httpsOnly,
  logErrors,
} from "./utils/middleware.js";

const apiRoot = "/api";

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

//if (config.production) {
//  app.enable("trust proxy");
//  app.use(httpsOnly());
//}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
