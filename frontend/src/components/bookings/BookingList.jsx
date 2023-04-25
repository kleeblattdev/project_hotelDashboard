import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BookingItem from "./BookingItem";
import "./bookingList.scss";

const BookingList = () => {
	const [bookings, setBookings] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;
	useEffect(() => {
		fetch(url + "/bookings")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setBookings(data);
			});
	}, []);
	return (
		<main>
			<section className="bookingList">
				<Link to="/addBooking">Add Booking</Link>
				{bookings &&
					bookings.map((booking) => {
						return <BookingItem key={uuidv4()} booking={booking} />;
					})}
			</section>
		</main>
	);
};

export default BookingList;
