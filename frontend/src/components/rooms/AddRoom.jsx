const AddRoom = () => {
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const submit = async (event) => {
		event.prevent.default();
		const form = new FormData(event.target);
		const response = await fetch(url + "/rooms", {
			method: "POST",
			body: form,
		});
		console.log(response);
	};
	return (
		<main>
			<form onSubmit={submit}>
				<label htmlFor="roomnr">
					Room Nr.
					<input type="number" name="roomnr" />
				</label>
				<select name="roomtype" id="roomtype">
					<option value="single">Single</option>
					<option value="double">Double</option>
					<option value="suite">Suite</option>
					<option value="apartment">Apartment</option>
				</select>
				<button type="submit">Add new Room</button>
			</form>
		</main>
	);
};

export default AddRoom;
