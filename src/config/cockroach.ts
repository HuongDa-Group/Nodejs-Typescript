import Sequelize from 'sequelize';
import UserModel from '@models/user.model';

const host: string = process.env.DB_COCKROACH || '';

const sequelize = new Sequelize.Sequelize(host, {
  dialect: 'postgres',
  timezone: '+07:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  }
});

sequelize
  .authenticate()
  .then(r => console.log('=-=- Connect DB Success -=-='));

const DB = {
  User: UserModel(sequelize),
  sequelize,
  Sequelize,
};

export default DB;
