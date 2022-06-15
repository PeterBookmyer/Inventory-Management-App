const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pricing extends Model {}

Pricing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cost: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      defaultValue: 0,
    },
    sales_price: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      defaultValue: 0,
    },
    order_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "inventory",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "pricing",
  }
);

module.exports = Pricing;
