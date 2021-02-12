import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Product } from "./Product.js";
import { About } from "./about.js";

//create your first component
export function Home() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={About} />

				<Route exact path="/product/:id">
					<Product />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
