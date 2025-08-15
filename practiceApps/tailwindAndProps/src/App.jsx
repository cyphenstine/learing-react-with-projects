// import { useState } from "react";
import Card from "./components/cards";

function App() {
	let myObj = {
		firstName: "Aritra",
		lastName: "Kumar",
		age: 20
	}
	return (
		<>
			<h1 className="bg-green-500 text-black p-4 rounded-2xl">this is h1</h1>
			<Card obj = {myObj} />
			<Card obj = {myObj} />
		</>
	);
}

export default App;
