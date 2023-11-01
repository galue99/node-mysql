import { DataTypes } from 'sequelize';


const ProductModel = (sequelize) => {
  return sequelize.define('product', {
    id: {
      type: DataTypes.STRING(24),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'products',
    timestamps: false
  });
};

export default ProductModel;
