import { Link } from "react-router-dom";

const BookingItem = ({ booking }) => {
	return (
		<Link>
			<h3></h3>
			<p>From: {booking.start}</p>
			<p>To: {booking.end}</p>
			<p>Breakfast: {booking.breakfast}</p>
		</Link>
	);
};

export default BookingItem;
