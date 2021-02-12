import React, { useState, createContext } from "react";

// inicializar el context
const Context = createContext(null);

const MyContext = PassedComponent => {
	const [tareas, setTareas] = useState({
		store: {
			todos: ["tarea1", "tarea2", "tarea3"]
		},
		actions: {
			addTarea: tarea => {
				console.log(tarea);

				tareas.store.todos.push(tarea);

				setTareas({
					store: { todos: [...tareas.store.todos] },
					actions: { ...tareas.actions }
				});
			}
		}
	});

	return (
		<Context.Provider value={{ tareas, setTareas }}>
			{PassedComponent.children}
		</Context.Provider>
	);
};

export { Context, MyContext };
