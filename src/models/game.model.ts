import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';
import { GameModalInterface } from '@interfaces/model/game.modal.interface';

export class GameModel extends Model<GameModalInterface> implements GameModalInterface {
  public id?: string;
  public name: string;
  public img: string;
}

export default function (sequelize: Sequelize): typeof GameModel {
  GameModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(191),
      },
      img: {
        allowNull: true,
        type: DataTypes.STRING(191),
        defaultValue: null,
      },
    },
    {
      tableName: 'games',
      sequelize,
      timestamps: false,
    },
  );
  return GameModel;
}
