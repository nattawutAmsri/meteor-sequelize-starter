import Sequelize from 'sequelize';
import db from '../connectors';

const options = {
  underscored: true
}

const UserModel = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
},options)

const Users = db.models.user;

export default Users;
