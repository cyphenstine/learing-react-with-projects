import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setIfNumberAllowed] = useState(false);
	const [specialCharAllowed, setIfSpecialCharAllowed] = useState(false);
	const [password, setPassword] = useState();

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (numberAllowed) chars += "0123456789";
		if (specialCharAllowed) chars += "@#$&()_-";
		const passwordChars = chars.split("");
		let randomPassword = "";
		for (let i = 0; i < length; i++) {
			randomPassword +=
				passwordChars[Math.floor(Math.random() * passwordChars.length)];
		}
		setPassword(randomPassword);
	}, [length, numberAllowed, specialCharAllowed]);

	const copyPasswordToCLipBoard = useCallback(()=>{
		passwordRef.current?.select()
		window.navigator.clipboard.writeText(password)
	},[password])

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, specialCharAllowed, passwordGenerator]);

	return (
		<>
			<div className="w-full h-screen flex items-center justify-center bg-[#cba6f7] text-[#313244] flex-col">
				<div className="flex items-center gap-4 bg-[#d0aff7] p-4 rounded-xl shadow-xl m-2">
					<input
						className="outline-none bg-transparent text-[#313244] placeholder:text-[#888] px-3 py-2"
						type="text"
						value={password}
						placeholder="password"
						readOnly
						ref={passwordRef}
					/>
					<button className="px-4 py-2 rounded-xl text-[#313244] bg-[#89b4fa] active:bg-[#8aadf4] transition-colors"
					onClick={copyPasswordToCLipBoard}
					>
						copy
					</button>
				</div>
				<div className="flex items-center gap-4 bg-[#d0aff7] px-3 py-2 rounded-xl m-2 shadow-xl">
					<input
						type="range"
						min={8}
						max={20}
						value={length}
						className="cursor-pointer"
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label>Length: {length}</label>
					<input
						type="checkbox"
						className="cursor-pointer"
						defaultChecked={numberAllowed}
						id="numberInput"
						onChange={() => {
							setIfNumberAllowed((prev) => !prev);
						}}
					/>
					<label>Numbers</label>
					<input
						type="checkbox"
						className="cursor-pointer"
						defaultChecked={numberAllowed}
						id="numberSpecialChar"
						onChange={() => {
							setIfSpecialCharAllowed((prev) => !prev);
						}}
					/>
					<label>Special Characters</label>
				</div>
			</div>
		</>
	);
}

export default App;
