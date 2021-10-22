import { NextFunction, Request, Response } from 'express';
import { LoginWebsiteRequest } from '@request/website/login.website.request';
import { LoginUserRequestInterface } from '@interfaces/request/user.request.interface';
import AuthWebsiteService from '@services/website/auth.website.service';

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const request = new LoginWebsiteRequest({
      body: req.body,
    });
    const body: LoginUserRequestInterface = request.body();
    const authService = new AuthWebsiteService();
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
