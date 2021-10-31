import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';
import { StaffModalInterface } from '@interfaces/model/staff.modal.interface';

export class UserModel
  extends Model<StaffModalInterface>
  implements StaffModalInterface
{
  public id?: string;
  public email: string;
  public username: string;
  public fullname?: string | null;
  public password: string;
  public lock?: string;
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
      lock: {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      tableName: 'staffs',
      sequelize,
      indexes: [
        {
          fields: ['username'],
        },
      ],
    }
  );
  return UserModel;
}
