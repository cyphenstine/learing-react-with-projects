import { useState } from "react";

function App() {
	// let value = 0;

	let [value, setValue] = useState(0);

	const increaseValue = () => {

		// even though there should be multiple increments but it won't useState() sends updates to UI or variables in batches through Fiber, the diffing algorithm.
		
		// setValue(value + 1);
		// setValue(value + 1);
		// setValue(value + 1);
		// setValue(value + 1);
		// setValue(value + 1);
		
		// this would increment 3 times at once

		setValue(counter => counter + 1) // setValue() would offer a callback function.
		setValue(counter => counter + 1)
		setValue(counter => counter + 1)
	};

	const decreaseValue = () => {
		setValue(value - 1);
	};

	return (
		<>
			<h1>hello!</h1>
			<h2>counter value: {value}</h2>
			<button onClick={increaseValue}>increase</button>
			<br />
			<button onClick={decreaseValue}>decrease</button>
		</>
	);
}

export default App;
