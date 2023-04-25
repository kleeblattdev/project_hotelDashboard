import { NavLink } from "react-router-dom";
import "./navigation.scss";
const Navigation = () => {
	return (
		<header>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/rooms">Rooms</NavLink>
				<NavLink to="/bookings">Bookings</NavLink>
			</nav>
		</header>
	);
};

export default Navigation;
