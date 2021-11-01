import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import StaffService from '@services/admin/staff.admin.service';
import { TokenInterface } from '@interfaces/token.interface';
import { RequestAuth } from '@interfaces/request-auth.interface.ts';

const AdminAuthMiddleware = async (
  req: RequestAuth,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.authorization) {
      const getToken: TokenInterface = (await verify(
        req.headers.authorization,
        process.env.TOKEN_SECRET
      )) as TokenInterface;
      const staffService: StaffService = new StaffService();
      req.staff = await staffService.get(getToken.id);
      return next();
    }
  } catch (e) {
    if (e.toString() !== 'JsonWebTokenError: invalid signature') {
      return next(e);
    }
  }
  return next({
    code: -2,
    mess: 'Wrong token, please login again',
  });
};

export default AdminAuthMiddleware;
