import React, { useState, useEffect } from "react";
import Task from "./Task.jsx";
import Form from "./Form.jsx";

const TodoList = () => {
	//States
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	

	//Hooks
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setList(data);
			})
			.catch((error) => {
				console.log("Error", error);
			});
	}, []);

	//Functions
	const apiUpdate = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales", {
			method: "PUT",
			body: JSON.stringify(list),
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log("Error", error);
			});
	};

	const inputHandler = (ev) => {
		setTask(ev.target.value);
	};

	const addTask = (ev) => {
		setList([...list, { label: task, done: false }]);
		setTask("");
		apiUpdate();
	};

	const cleanList = () => {
		setList([]); // Asignamos array vacio para la lista de tareas
		apiUpdate([]); 
	  };

	const removeTask = (index) => {
		const newArray = list.filter((item, i) => i !== index); // Operador de desigualdad estricta 
		setList(newArray);
		apiUpdate();
	};

	return (
		<>
			<Form
				input={task}
				inputHandler={inputHandler}
				addTask={task.length > 0 ? addTask : null}
				cleanList={cleanList}
			/>
			<div className="list">
				<ul>
					{list.map((task, i) => (
						<Task
							key={i}
							task={task.label}
							removeTask={() => removeTask(i)}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default TodoList;