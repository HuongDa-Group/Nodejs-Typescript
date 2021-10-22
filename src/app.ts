import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import cockroachDB from '@config/cockroach';
import couchbase from '@config/couchbase';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;
  public cors: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';
    this.cors = process.env.CORS || '';

    App.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`=================================`);
      console.info(`======= ENV: ${this.env} =======`);
      console.info(`🚀 App listening on the port ${this.port}`);
      console.info(`=================================`);
    });
  }

  private static connectToDatabase() {
    cockroachDB.sequelize
      .sync({
        force: false,
      })
      .then();
    couchbase().then();
  }

  private initializeMiddlewares() {
    this.app.use(
      cors({
        origin: this.cors.split('|'),
        optionsSuccessStatus: 200,
      })
    );
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;
