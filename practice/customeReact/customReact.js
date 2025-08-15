const mainContainer = document.getElementById("root");

const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "click me to visit google",
};

const customRenderer = (reactElement, location) => {
	const domElement = document.createElement(reactElement.type);
	domElement.innerHTML = reactElement.children;

	// manually setting:

	// domElement.setAttribute("href", reactElement.props.href);
	// domElement.setAttribute("target", reactElement.props.target);
	// location.appendChild(domElement);

	// setting with loop:

	for (const prop in reactElement.props) {
		if (prop === "children") {
			continue;
		}
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	location.appendChild(domElement);
};

customRenderer(reactElement, mainContainer);
