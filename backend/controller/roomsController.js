import { getDb } from "../utils/db.js";

const COL = "rooms";

export const getRooms = async (_, res) => {
	try {
		const db = await getDb();
		const result = await db.collection(COL).find().toArray();
		if (result === null) {
			res.end();
		} else {
			res.json(result);
		}
	} catch (e) {
		console.log(e);
	}
};

export const addRoom = async (req, res) => {
	try {
		const db = await getDb();
		const result = await db.collection(COL).insertOne(req.body);
		res.json();
	} catch (e) {
		console.log(e);
	}
};
