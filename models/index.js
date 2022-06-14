const User = require('./Users');
const Pricing = require('/Pricing');
const Inventory = require('./Inventory');

Inventory.hasMany(Pricing, {
    foreignKey: 'inventory_id',
});

Pricing.belongsTo(Inventory, {
    foreignKey: 'inventory_id',
});


module.exports = { User, Pricing, Inventory };
