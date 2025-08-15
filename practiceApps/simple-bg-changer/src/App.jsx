import { useState } from "react";

function App() {
	const [color, setColor] = useState("#11111b");

	return (
		<div
			className="w-full h-screen duration-900"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-10">
				<button
					className="px-5 py-5 rounded-2xl w-30 font-bold"
					style={{ backgroundColor: "#dd7878", color: "#181926" }}
					onClick={() => setColor("#dd7878")}
				>
					Flamingo
				</button>
				<button
					className="px-5 py-5 rounded-2xl w-30 font-bold"
					style={{ backgroundColor: "#8839ef", color: "#181926" }}
					onClick={() => setColor("#8839ef")}
				>
					Mauve
				</button>
				<button
					className="px-5 py-5 rounded-2xl w-30 font-bold"
					style={{ backgroundColor: "#e64553", color: "#181926" }}
					onClick={() => setColor("#e64553")}
				>
					Maroon
				</button>
				<button
					className="px-5 py-5 rounded-2xl w-30 font-bold"
					style={{ backgroundColor: "#179299", color: "#181926" }}
					onClick={() => setColor("#179299")}
				>
					Teal
				</button>
			</div>
		</div>
	);
}

export default App;
