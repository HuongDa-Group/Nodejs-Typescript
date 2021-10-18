import {Router} from 'express';
import {Routes} from '@interfaces/routes.interface';
import LoginWebsiteController from '@controllers/website/login';

class WebsiteRoute implements Routes {
  public path = '/website/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/login`, LoginWebsiteController);
  }
}

export default WebsiteRoute;
