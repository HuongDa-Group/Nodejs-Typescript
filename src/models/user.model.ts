import { Sequelize, DataTypes, Model, Optional, UUIDV4 } from 'sequelize';
import { UserModalInterface } from '@interfaces/model/user.modal.interface';

export type UserAttributes = Optional<
  UserModalInterface,
  'id' | 'email' | 'password' | 'username' | 'actived_at'
>;

export class UserModel
  extends Model<UserModalInterface, UserAttributes>
  implements UserModalInterface
{
  public id: string;
  public email: string;
  public username: string;
  public password: string;
  public actived_at: Date | null;
  public lock: string | null;
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
      lock: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      },
      actived_at: {
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
