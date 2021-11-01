import { StaffModel } from '@models/staff.model';
import bcryptjs from 'bcryptjs';
import { LoginUserRequestInterface } from '@interfaces/request/user.request.interface';
import { TokenInterface } from '@interfaces/token.interface';
import { sign } from 'jsonwebtoken';
import { JWT_SECRECT } from '@config/token';

export default class AuthAdminService {
  private Staff: StaffModel;

  public async login(data: LoginUserRequestInterface): Promise<void> {
    const staff: StaffModel = await StaffModel.findOne({
      where: {
        username: data.username,
      },
    });
    if (staff === null)
      throw {
        code: 1,
        mess: 'Not found username or email',
      };
    if (!bcryptjs.compareSync(data.password, staff.password))
      throw {
        code: 1,
        mess: 'Wrong password',
      };
    this.Staff = staff;
  }

  public async checkUsernameExist(username: string): Promise<boolean> {
    const checkUsername: number = await StaffModel.count({
      where: {
        username: username,
      },
    });
    return checkUsername !== 0;
  }

  public async checkEmailExist(email: string): Promise<boolean> {
    const checkEmail: number = await StaffModel.count({
      where: {
        email: email,
      },
    });
    return checkEmail !== 0;
  }

  public async generateToken(): Promise<string> {
    const data: TokenInterface = {
      id: this.Staff.id,
      createdAt: new Date(),
    };
    return sign(data, JWT_SECRECT);
  }
}
