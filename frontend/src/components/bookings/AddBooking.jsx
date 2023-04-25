import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./addBooking.scss";

const AddBooking = () => {
	const [rooms, setRooms] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		fetch(url + "/rooms")
			.then((res) => res.json())
			.then((data) => setRooms(data))
			.catch((err) => console.log(err));
	}, []);

	const submit = async (event) => {
		event.preventDefault();
		const form = new FormData(event.target);
		await fetch(url + "/bookings", { method: "POST", body: form });
	};

	return (
		<main>
			<form onSubmit={submit} className="bookingForm">
				<label htmlFor="start">
					Start:
					<input type="date" name="start" id="start" />
				</label>
				<label htmlFor="end">
					End:
					<input type="date" name="end" id="end" />
				</label>
				<label htmlFor="rooms">
					Room:
					<select name="room" id="room">
						{rooms &&
							rooms.map((room) => {
								return <option key={uuidv4()}>{room.roomnr}</option>;
							})}
					</select>
				</label>
				<label htmlFor="breakfast">
					Breakfast:
					<label htmlFor="yes">
						Yes
						<input type="radio" name="breakfast" value="true" />
					</label>
					<label htmlFor="no">
						No
						<input type="radio" name="breakfast" value="false" />
					</label>
				</label>
				<button type="submit">Add Booking</button>
			</form>
		</main>
	);
};

export default AddBooking;
