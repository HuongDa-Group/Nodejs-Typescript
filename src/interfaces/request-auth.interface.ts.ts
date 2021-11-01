import { Request } from 'express';
import { StaffModel } from '@models/staff.model';

export interface RequestAuth extends Request {
  staff?: StaffModel;
}
