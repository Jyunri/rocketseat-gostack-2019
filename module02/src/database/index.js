import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import User from '../app/models/User';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // faz conexao com banco
    this.connection = new Sequelize(databaseConfig);

    // carrega os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
