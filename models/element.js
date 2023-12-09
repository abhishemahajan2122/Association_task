const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const Element = sequelize.define("Element", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = { Element };
