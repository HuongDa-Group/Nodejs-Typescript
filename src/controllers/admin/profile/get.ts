import { NextFunction, Response } from 'express';
import { RequestAuth } from '@interfaces/request-auth.interface.ts';

export default async function (
  req: RequestAuth,
  res: Response,
  next: NextFunction
) {
  try {
    next({
      code: 0,
      data: req.staff,
      mess: 'Login success',
    });
  } catch (e) {
    next(e);
  }
}
