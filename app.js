const express = require("express");
const cors = require("cors");
const route = require("./routes");
const { sequelize } = require("./config");

const app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());

app.use("/", route);
sequelize.sync({ force: false }).then(() => {
	app.listen(3000, () => {
		console.log(`Server is running on http://localhost:3000`);
	});
});
