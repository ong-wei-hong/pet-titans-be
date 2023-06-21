import { ObjectId } from "mongodb";
import db from "../db/conn.js"
import express from "express";

const router = express.Router();

// GET /users/
router.get("/", async(req, res) => {
	let collection = await db.collection("quest");
	let results = await collection.find({}).toArray();

	res.send(results).status(200);
})

// GET /users/:id
router.get("/:id", async(req, res) => {
	let collection = await db.collection("quest");
	let results = await collection.findOne({ "_id": new ObjectId(req.params.id) });
	

	res.send(results).status(200);
})


export default router
