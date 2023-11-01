import Sequelize from 'sequelize';
import crypto from 'crypto';

const ShipmentModel = (sequelize) => {
  return sequelize.define('shipment', {
    id: {
      type: Sequelize.STRING(24),
      allowNull: false,
      primaryKey: true,
      defaultValue: function() {
        return crypto.randomBytes(12).toString('hex');
      }
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    },
    truck_id: {
      type: Sequelize.STRING(24),
      allowNull: true,
    },
    trucker_id: {
      type: Sequelize.STRING(24),
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    load_id: {
      type: Sequelize.STRING(24),
      allowNull: true,
    },
  }, {
    timestamps: false,
    tableName: 'shipments'
  });
}

export default ShipmentModel;
