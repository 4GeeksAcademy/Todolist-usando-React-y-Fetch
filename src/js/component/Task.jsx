//Import React
import React from "react";

// //Import proptypes
import Proptypes from "prop-types";

const Task = (props) => {
	return (
		<>
			<li key={props.key} className="list-element">
				{props.task}
				<button
					className="d-inline my-2 mx-3 btn btn-danger"
					onClick={props.removeTask}>
					Delete
				</button>
			</li>
		</>
	);
};

Task.propTypes = {
	key: Proptypes.number,
	task: Proptypes.string,
	removeTask: Proptypes.func,
};

export default Task;