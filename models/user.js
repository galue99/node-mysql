import Sequelize from 'sequelize';

const UserModel = (sequelize) => {
  return sequelize.define('user', {
    id: {
      type: Sequelize.STRING(24),
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    cuit: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    phone_number: {
      type: Sequelize.STRING(45),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }, {
    timestamps: false,
    tableName: 'users'
  });
}

export default UserModel;
