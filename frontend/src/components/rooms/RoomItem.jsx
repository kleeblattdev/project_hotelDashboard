import { Link } from "react-router-dom";

const RoomItem = ({ roomnr, roomtype }) => {
	return (
		<Link>
			<h3>{roomnr}</h3>
			<p>{roomtype}</p>
		</Link>
	);
};

export default RoomItem;
