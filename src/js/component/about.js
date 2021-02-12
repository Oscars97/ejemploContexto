import React, { useContext } from "react";

//importar el context
import { Context } from "../store/AppContext.js";

//import LINK
import { Link } from "react-router-dom";

export const About = () => {
	let { tareas, setTareas } = useContext(Context);
	console.log(tareas);

	const algunaFuncion = () => {
		console.log("some click");
	};

	const agregarTarea = () => {
		let t = "nueva tarea";
		tareas.actions.addTarea(t);
	};

	return (
		<div>
			<h1 onClick={algunaFuncion}>About page</h1>
			<button onClick={agregarTarea}>Agregar Tarea</button>
			<Link to="/product/2">Ir a los Productos</Link>
			<ul>
				{tareas.store.todos.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
