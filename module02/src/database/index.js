import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import User from '../app/models/User';
import File from '../app/models/File';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // faz conexao com banco
    this.connection = new Sequelize(databaseConfig);

    // carrega os models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();