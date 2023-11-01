import Sequelize from 'sequelize';
import dotenv from 'dotenv';

import ShipmentModel from './models/shipment.js';
import TruckModel from "./models/truck.js";
import UserModel from "./models/user.js";
import LoadModel from "./models/load.js";
import ProductModel from "./models/product.js";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Shipment = ShipmentModel(sequelize, Sequelize);
db.Truck = TruckModel(sequelize, Sequelize);
db.User = UserModel(sequelize, Sequelize);
db.Load = LoadModel(sequelize, Sequelize);
db.Product = ProductModel(sequelize, Sequelize);

// Relationship
db.Truck.hasMany(db.Shipment, { foreignKey: 'truck_id', as: 'shipments' });
db.Shipment.belongsTo(db.Truck, { foreignKey: 'truck_id', as: 'truck' });

db.User.hasMany(db.Shipment, { foreignKey: 'trucker_id', as: 'shipments' });
db.Shipment.belongsTo(db.User, { foreignKey: 'trucker_id', as: 'trucker' });

db.Load.hasOne(db.Shipment, { foreignKey: 'load_id', as: 'Shipment' });
db.Shipment.belongsTo(db.Load, { foreignKey: 'load_id', as: 'load' });

db.Product.hasMany(db.Load, { foreignKey: 'product_id', as: 'loads'});

db.Load.belongsTo(db.Product, { foreignKey: 'product_id', as: 'product'});

export default db;
