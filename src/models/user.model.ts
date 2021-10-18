import {
  Sequelize,
  DataTypes,
  Model,
  Optional
} from 'sequelize';
import {
  UserModalInterface
} from '@interfaces/model/user.modal.interface';

export type UserAttributes = Optional<UserModalInterface, 'id' | 'email' | 'password'>;

export class UserModel extends Model<UserModalInterface, UserAttributes> implements UserModalInterface {
  public id: string;
  public email: string;
  public username: string;
  public password: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
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
  }, {
    tableName: 'users',
    sequelize,
  });
  return UserModel;
}
