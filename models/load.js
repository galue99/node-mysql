import Sequelize from 'sequelize';

const LoadModel = (sequelize) => {
  return sequelize.define('load', {
    id: {
      type: Sequelize.STRING(24),
      primaryKey: true,
    },
    product_id: {
      type: Sequelize.STRING(24),
      allowNull: false,
    },
    product_quantity: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    fare: {
      type: Sequelize.DECIMAL(20, 2),
      allowNull: true,
    },
    fare_type: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    distance: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    from_city: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    from_address: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    to_city: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    to_address: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    owner_id: {
      type: Sequelize.STRING(24),
      allowNull: true,
    },
  }, {
    timestamps: false,
    tableName: 'loads'
  });
}

export default LoadModel;
