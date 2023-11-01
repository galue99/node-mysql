import Sequelize from 'sequelize';

const TruckModel = (sequelize) => {
  return sequelize.define('truck', {
    id: {
      type: Sequelize.STRING(24),
      primaryKey: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    plate: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }, {
    timestamps: false,
    tableName: 'trucks'
  });
}

export default TruckModel;
