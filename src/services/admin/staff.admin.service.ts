import { StaffModel } from '@models/staff.model';

export default class AuthAdminService {
  private Staff: StaffModel;

  public async get(id: string, select = ['*']): Promise<StaffModel> | null {
    this.Staff = await StaffModel.findOne({
      where: {
        id: id,
      },
      // attributes: select,
    });
    return this.Staff;
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
}
