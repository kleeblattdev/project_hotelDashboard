import { useState, useEffect } from "react";

const Home = () => {
	const [bookings, setBookings] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		fetch(url + "bookings")
			.then((res) => res.json)
			.then((data) => setBookings(data.length));
	}, []);

	return (
		<main>
			<h1>Welcome</h1>
			<section>
				<h2>Buchungen</h2>
				<h3>{bookings}</h3>
			</section>
		</main>
	);
};

export default Home;
