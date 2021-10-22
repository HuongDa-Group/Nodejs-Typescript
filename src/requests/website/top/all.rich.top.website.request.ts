import { requestInterface } from '@interfaces/request.interface';
import { Request } from '@request/request';
import Joi, { ValidationResult } from 'joi';

export class AllRichTopWebsiteRequest extends Request {
  protected request: requestInterface;

  constructor(request: requestInterface) {
    super();
    this.request = request;
  }

  public header(): any {
    return null;
  }

  public body(): any {
    return null;
  }

  public query(): any {
    const schema: Joi.ObjectSchema = Joi.object({
      limit: Joi.number().min(1).max(50).default(10),
    });
    const body: ValidationResult = schema.validate(this.request.query);
    if (body.error) {
      throw {
        code: -1,
        mess: body.error.message,
      };
    }
    return body.value;
  }
}
