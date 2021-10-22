import { requestInterface } from '@interfaces/request.interface';
import { Request } from '@request/request';
import Joi, { ValidationResult } from 'joi';
import { ReturnInterface } from '@interfaces/return.interface';

export class LoginWebsiteRequest extends Request {
  protected request: requestInterface;

  constructor(request: requestInterface) {
    super();
    this.request = request;
  }

  public header(): any {
    return null;
  }

  public body(): any {
    const schema: Joi.ObjectSchema = Joi.object({
      username: Joi.string().min(6).max(191).required(),
      password: Joi.string().required(),
    });
    const body: ValidationResult = schema.validate(this.request.body);
    if (body.error) {
      const _return: ReturnInterface = {
        code: -1,
        mess: body.error.message,
      };
      throw _return;
    }
    return body.value;
  }

  public query(): any {
    return null;
  }
}
