import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';
import { UserModalInterface } from '@interfaces/model/user.modal.interface';
import GenderEnumInterface from '@interfaces/enum/gender.enum.interface';

export class UserModel
  extends Model<UserModalInterface>
  implements UserModalInterface
{
  public id?: string;
  public email: string;
  public username: string;
  public fullname?: string | null;
  public nickname?: string | null;
  public password: string;
  public birthday: Date | null;
  public lang?: string;
  public country?: string;
  public city?: string;
  public lock?: string;
  public money?: number;
  public gender?: GenderEnumInterface;
  public avatar?: string;
  public actived_email_at: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(191),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(191),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(191),
      },
      fullname: {
        allowNull: true,
        type: DataTypes.STRING(191),
      },
      nickname: {
        allowNull: true,
        type: DataTypes.STRING(191),
      },
      birthday: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      lang: {
        defaultValue: 'vi',
        type: DataTypes.STRING(3),
      },
      country: {
        defaultValue: 'VN',
        type: DataTypes.STRING(3),
      },
      city: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING(191),
      },
      gender: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING(6),
      },
      money: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      lock: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      },
      avatar: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      },
      actived_email_at: {
        allowNull: true,
        type: DataTypes.DATE,
        defaultValue: null,
      },
    },
    {
      tableName: 'users',
      sequelize,
      indexes: [
        {
          fields: ['email'],
        },
        {
          fields: ['username'],
        },
      ],
    }
  );
  return UserModel;
}
