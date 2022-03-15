/*Reqs*/

import express, { Express, Request, Response, NextFunction } from "express";

// import cors from "cors";
import path from "path";
import routes from "./src/api/00_index/index.routes";
import ErrHandler from "./src/middleware/ErrHandler.mw";
import SendAsJson from "./src/middleware/SendAsJson.mw";
import * as IndexServices from "./src/services/Index.service";
const app: Express = express();

/** Logs */
import logger from "morgan";
logger.token("localDate", function getDate(req) {
    let date = new Date();
    return process.env.NODE_ENV != "production"
        ? date.toLocaleString("en-US", { timeZone: "America/Monterrey" })
        : IndexServices.GetDate(date).toLocaleString("en-US", {
              timeZone: "America/Monterrey",
          });
});
logger.format(
    "combined",
    ":method - :status [:localDate] :url :res[content-length] :response-time "
);

/**Error Handling */

/** Security Reqs */
import helmet from "helmet";

/**Environment setup */
const port: number | string = process.env.NODE_PORT || 4000;
// const environment : string = process.env.ENVIRONMENT;
const projectName: string = process.env.PROJECT_NAME;

/** Middleware setup */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("combined"));
//app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: `${projectName} API is running on port ${port}`,
    });
});

routes(app);

app.use(ErrHandler());
app.use(SendAsJson());

app.listen(port, (): void => {
    console.log(`${projectName} Runnning on port ${port}`);
});
