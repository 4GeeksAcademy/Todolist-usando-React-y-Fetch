//Import React
import React from "react";

// //Import proptypes
import Proptypes from "prop-types";

//Desestructuramos para hacer codigo más legible
const Task = ({ key, task, removeTask }) => {
	return (
	  <>
		<li key={key} className="list-element">
		  {task}
		  <button
			className="d-inline my-2 mx-3 btn btn-danger"
			onClick={removeTask}>
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