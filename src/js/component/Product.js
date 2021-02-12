import React, { useContext } from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/AppContext.js";

export const Product = () => {
	let { tareas, setTareas } = useContext(Context);
	console.log(tareas);

	let params = useParams();
	console.log(params);

	return (
		<div>
			<h1>Product: {params.id}</h1>
		</div>
	);
};
