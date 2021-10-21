import {Router} from 'express';
import {Routes} from '@interfaces/routes.interface';
import LoginAuthWebsiteController from '@controllers/website/auth/login';
import RegisterAuthWebsiteController from '@controllers/website/auth/register';

class WebsiteRoute implements Routes {
  public path = '/website/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/login`, LoginAuthWebsiteController);
    this.router.post(`/register`, RegisterAuthWebsiteController);
  }
}

export default WebsiteRoute;
