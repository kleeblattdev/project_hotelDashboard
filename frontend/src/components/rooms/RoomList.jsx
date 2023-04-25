import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const RoomList = () => {
	const [rooms, setRooms] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;
	useEffect(() => {
		fetch(url + "rooms")
			.then((res) => res.json())
			.then((data) => setRooms(data));
	}, []);

	return (
		<main>
			<Link to="/addRoom"></Link>
			{rooms &&
				rooms.map((room) => {
					return (
						<>
							<Link key={uuidv4()}>{room.nr}</Link>
						</>
					);
				})}
		</main>
	);
};

export default RoomList;
