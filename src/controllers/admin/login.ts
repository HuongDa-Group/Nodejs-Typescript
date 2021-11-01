import { NextFunction, Request, Response } from 'express';
import { LoginAdminRequest } from '@request/admin/login.admin.request';
import { LoginUserRequestInterface } from '@interfaces/request/user.request.interface';
import AuthAdminService from '@services/admin/auth.admin.service';

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const request = new LoginAdminRequest({
      body: req.body,
    });
    const body: LoginUserRequestInterface = request.body();
    const authService = new AuthAdminService();
    await authService.login(body);
    const token: string = await authService.generateToken();
    next({
      code: 0,
      data: {
        token,
      },
      mess: 'Login success',
    });
  } catch (e) {
    next(e);
  }
}
