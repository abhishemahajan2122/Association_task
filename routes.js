const express = require("express");
const route = express.Router();
const { Compound, Element } = require("./models/association");
route.post("/compounds", async (req, res) => {
	try {
		const { name, elements } = req.body;
		const compound = await Compound.create({ name });

		if (elements && elements.length > 0) {
			const elementInstances = await Element.bulkCreate(
				elements.map((element) => ({ name: element }))
			);

			await compound.setElements(elementInstances);
		}
		res.status(201).json(compound);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

route.get("/compounds", async (req, res) => {
	try {
		const compounds = await Compound.findAll({ include: Element });
		res.json(compounds);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

module.exports = route;
