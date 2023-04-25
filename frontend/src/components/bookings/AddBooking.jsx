import { useState, useEffect } from "react";

const AddBooking = (event) => {
	const [rooms, setRooms] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const submit = async () => {
		const form = new FormData(event.target);

		await fetch(url + "/bookings", { method: "POST", body: form });
	};

	return (
		<main>
			<form onSubmit={submit}>
				<label htmlFor="start">
					Start:
					<input type="date" name="start" id="start" />
				</label>
				<label htmlFor="end">
					End:
					<input type="date" name="end" id="end" />
				</label>
				<select name="rooms" id="rooms"></select>

				<button type="submit">Add Booking</button>
			</form>
		</main>
	);
};

export default AddBooking;
