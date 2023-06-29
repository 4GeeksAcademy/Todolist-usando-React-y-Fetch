//Import React
import React from "react";
//Import proptypes
import Proptypes from "prop-types";

const Form = (props) => {
	const submitHandler = (ev) => {
		ev.preventDefault();
	};
	return (
		<>
			<div className="title">
				<h1>TODO List</h1>
			</div>
			<form className="todo-form" onSubmit={submitHandler}>
				<input
					className="todo-input"
					type="text"
					placeholder="Task"
					value={props.input}
					onChange={props.inputHandler}></input>
				<button
					className="col-1 p-1 m-2 btn btn-success"
					onClick={props.addTask}
					////validación para deshabilitar el botón "Add" cuando no haya nada en el campo de entrada
					disabled={!props.input}> 
					
					Add
				</button>
				<button
					className="col-1 p-1 btn btn-danger"
					onClick={props.cleanList}
					>
					Delete All
				</button>
			</form>
		</>
	);
};

Form.propTypes = {
	input: Proptypes.string,
	inputHandler: Proptypes.func,
	addTask: Proptypes.func,
	cleanList: Proptypes.func,
	list: Proptypes.array,
};

export default Form;