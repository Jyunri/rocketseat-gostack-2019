import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// models
import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Enrollment from '../app/models/Enrollment';
import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';

const models = [User, Student, Plan, Enrollment, Checkin, HelpOrder];

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
