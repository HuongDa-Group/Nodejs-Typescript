import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import LoginAuthAdminController from '@controllers/admin/login';
import GetProfileAdminController from '@controllers/admin/profile/get';
import AdminAuthMiddleware from '@middlewares/admin.auth.middleware';

class AdminRoute implements Routes {
  public path = '/admin/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`/login`, LoginAuthAdminController);
    this.router.get(`/profile`, AdminAuthMiddleware, GetProfileAdminController);
  }
}

export default AdminRoute;
