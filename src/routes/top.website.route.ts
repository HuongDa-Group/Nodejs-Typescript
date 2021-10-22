import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import RichTopWebsiteController from '@controllers/website/top/rich';
import MonthRichTopWebsiteController from '@controllers/website/top/rich-month';
import WeekRichTopWebsiteController from '@controllers/website/top/rich-week';

class TopWebsiteRoute implements Routes {
  public path = '/website/top/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/rich`, RichTopWebsiteController);
    this.router.get(`/rich/week`, MonthRichTopWebsiteController);
    this.router.get(`/rich/month`, WeekRichTopWebsiteController);
  }
}

export default TopWebsiteRoute;
