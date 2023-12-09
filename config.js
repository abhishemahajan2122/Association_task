const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "Abhishek2122",
	database: "association",
});

module.exports = { sequelize };
