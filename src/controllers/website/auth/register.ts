import { NextFunction, Request, Response } from 'express';
import { RegisterWebsiteApiRequest } from '@request/website/register.website.api.request';
import { RegisterUserRequestInterface } from '@interfaces/request/user.request.interface';
import AuthWebsiteService from '@services/website/auth.website.service';

export default async function (req: Request, res: Response, next: NextFunction) {
  const request = new RegisterWebsiteApiRequest({
    body: req.body,
  });
  try {
    const body: RegisterUserRequestInterface = request.body();
    const authService: AuthWebsiteService = new AuthWebsiteService();
    const checkUsername: boolean = await authService.checkUsernameExist(body.username);
    if (checkUsername)
      return next({
        code: 1,
        mess: 'Username exist in system',
      });
    const checkEmail: boolean = await authService.checkEmailExist(body.email);
    if (checkEmail)
      return next({
        code: 2,
        mess: 'Email exist in system',
      });
    await authService.register(body);
    const token: string = await authService.generateToken();
    next({
      code: 0,
      data: {
        token,
      },
      mess: 'Register success',
    });
  } catch (e) {
    next(e);
  }
}
