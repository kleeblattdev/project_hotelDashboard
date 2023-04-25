import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import RoomItem from "./RoomItem";
import "./roomList.scss";

const RoomList = () => {
	const [rooms, setRooms] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;
	useEffect(() => {
		fetch(url + "/rooms")
			.then((res) => res.json())
			.then((data) => {
				setRooms(data);
			});
	}, []);

	return (
		<main>
			<section className="roomlist">
				<Link to="/addRoom">Add Room</Link>
				{rooms &&
					rooms.map((room) => {
						return (
							<RoomItem
								key={uuidv4()}
								roomnr={room.roomnr}
								roomtype={room.roomtype}
							/>
						);
					})}
			</section>
		</main>
	);
};

export default RoomList;
