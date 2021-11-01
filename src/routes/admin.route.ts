import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import LoginAuthAdminController from '@controllers/admin/login';

class AdminRoute implements Routes {
  public path = '/admin/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/login`, LoginAuthAdminController);
  }
}

export default AdminRoute;
