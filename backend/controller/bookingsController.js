import { ObjectId } from "mongodb";
import { getDb } from "../utils/db.js";

const COL = "bookings";

export const getBookings = async (_, res) => {
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

export const addBooking = async (req, res) => {
	try {
		const db = await getDb();
		const result = await db.collection(COL).insertOne(req.body);
		res.json();
	} catch (e) {
		console.log(e);
	}
};

export const deleteBooking = async (req, res) => {
	try {
		const db = getDb();
		const result = await db
			.collection(COL)
			.findOneAndDelete({ _id: req.body.id });
		res.end();
	} catch (e) {
		console.log(e);
	}
};
