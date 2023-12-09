const { DataTypes } = require("sequelize");
const { sequelize } = require("../config");

const Compound = sequelize.define("Compound", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = { Compound };
