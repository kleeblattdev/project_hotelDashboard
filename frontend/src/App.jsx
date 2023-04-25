import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import RoomList from "./components/rooms/RoomList";
import AddRoom from "./components/rooms/AddRoom";
import BookingList from "./components/bookings/BookingList";
import AddBooking from "./components/bookings/AddBooking";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rooms" element={<RoomList />} />
					<Route path="/bookings" element={<BookingList />} />
					<Route path="/addRoom" element={<AddRoom />} />
					<Route path="/addBooking" element={<AddBooking />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
