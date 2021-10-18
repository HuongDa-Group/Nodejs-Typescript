import {
  NextFunction,
  Request,
  Response
} from 'express';
import {ReturnInterface} from "@interfaces/return.interface";

const errorMiddleware = (error: ReturnInterface, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = error.status || 200;
    const code: number = error.code || -10;
    const message: string = error.mess || 'Something went wrong';
    const data: any | any[] = error.data || {};
    res.status(status)
      .json({
        code: code,
        mess: message,
        data: data
      });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
