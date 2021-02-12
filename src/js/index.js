//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Home } from "./component/home.js";
import { MyContext } from "./store/AppContext.js";

const ContextWrapper = () => {
	return (
		<MyContext>
			<Home />
		</MyContext>
	);
};

//render your react application
ReactDOM.render(<ContextWrapper />, document.querySelector("#app"));
