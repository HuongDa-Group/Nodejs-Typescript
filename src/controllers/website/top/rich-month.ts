import { NextFunction, Request, Response } from 'express';
import { AllRichTopWebsiteRequest } from '@request/website/top/all.rich.top.website.request';
import { LimitQueryRequestInterface } from '@interfaces/request/top.rich.request.interface';
import TopRichService from '@services/website/top-rich.service';

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const request = new AllRichTopWebsiteRequest({
      query: req.query,
    });
    const query: LimitQueryRequestInterface = request.query();
    const topRichService: TopRichService = new TopRichService();
    const listRich = await topRichService.all(query.limit);
    next({
      code: 0,
      data: listRich,
      mess: 'Login success',
    });
  } catch (e) {
    next(e);
  }
}
