const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {};

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_file: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        current_stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        sequelize,
        
    }

)

// Gallery.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       starting_date: {
//         type: DataTypes.DATE,
//         allowNull: false,
//       },
//       ending_date: {
//         type: DataTypes.DATE,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'gallery',
//     }
//   );