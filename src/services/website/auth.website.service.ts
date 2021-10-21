import {UserModel} from "@models/user.model";
import {Op, Transaction} from "sequelize";
import bcryptjs from "bcryptjs";
import {LoginUserRequestInterface, RegisterUserRequestInterface} from "@interfaces/request/user.request.interface";
import cockroach from '@config/cockroach';
import {TokenInterface} from "@interfaces/token.interface";
import {sign} from 'jsonwebtoken'
import {JWT_SECRECT} from "@config/token";

export default class AuthWebsiteService {
  private User: UserModel;

  public async login(data: LoginUserRequestInterface): Promise<void> {
    const user: UserModel = await UserModel.findOne({
      where: {
        [Op.or]: [{
          email: data.username
        }, {
          username: data.username
        }]
      }
    });
    if (user === null)
      throw ({
        code: 1,
        mess: 'Not found username or email'
      });
    if (!bcryptjs.compareSync(data.password, user.password))
      throw ({
        code: 1,
        mess: 'Wrong password'
      });
    this.User = user;
  }

  public async register(data: RegisterUserRequestInterface): Promise<void> {
    try {
      await cockroach.sequelize.transaction(async (t: Transaction) => {
        this.User = await UserModel.create({
          username: data.username,
          password: bcryptjs.hashSync(data.password),
          email: data.email
        }, {
          transaction: t
        });
      });
    } catch (e) {
      throw e;
    }
  }

  public async checkUsernameExist(username: string): Promise<boolean> {
    const checkUsername: number = await UserModel.count({
      where: {
        username: username
      }
    });
    return checkUsername !== 0
  }

  public async checkEmailExist(email: string): Promise<boolean> {
    const checkEmail: number = await UserModel.count({
      where: {
        email: email
      }
    });
    return checkEmail !== 0
  }

  public async generateToken(): Promise<string> {
    const data: TokenInterface = {
      id: this.User.id,
      createdAt: new Date()
    }
    return sign(data, JWT_SECRECT);
  }
}
