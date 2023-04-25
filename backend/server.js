import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import "./config/config.js";
import { addRoom, getRooms } from "./controller/roomsController.js";
import {
	addBooking,
	deleteBooking,
	getBookings,
} from "./controller/bookingsController.js";

const PORT = process.env.PORT || 8989;

const app = express();
const upload = multer();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//Room Routes
app.get("/api/v1/rooms", getRooms);
app.post("/api/v1/rooms", upload.none(), addRoom);

//Booking Routes
app.get("/api/v1/bookings", getBookings);
app.post("/api/v1/bookings", upload.none(), addBooking);
app.delete("/api/v1/bookings", deleteBooking);

app.listen(PORT, () => console.log("Server listening on port", PORT));
