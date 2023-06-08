import React, {useState, useEffect}  from "react";

const Lista = () => {
  const [task, setTask] = useState("");
  const [taskList, settaskList] = useState ([]);
  
  
   //1 PASO creo mi usuario   
  function crearUsuario () {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales17',{
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
     
      },  
     
      body: JSON.stringify([]) 
  })
  .then((response)=>response.json())
  .then((data)=> {if (data.result === "ok") {getTask()} 
  console.log(data)})
  .catch((err)=>console.log(err))
}


  
 function getTask () {
		fetch('https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales17',{
			method: 'GET', 
		})
		.then((response) => {console.log(response.status);
    if (response.status === 404) {crearUsuario()} 
    return response.json()})
		.then((data)=>settaskList(data))
		.catch((err)=>console.log(err))
  }


  useEffect(() => {
   getTask()
  },[])

 
const actualizarTask = () => {
fetch('https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales17', {
  method: 'PUT', 
  body: JSON.stringify(taskList), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then((response)=>response.json())
.then(taskList => console.log( JSON.stringify(taskList)))
.catch(error => console.error('Error:', error));
}


useEffect(() => {
  if (taskList.length > 0 ) {
    actualizarTask(taskList);
  }
}, [taskList]);
 

function deleteTask () {
fetch('https://assets.breatheco.de/apis/fake/todos/user/Antoniomorales17', {
      method: 'DELETE',
})
.then(response => response.json())
.then(response=> {
      console.log(response);
});
}



  const AddTask = () => {
    settaskList ([...taskList, { label: task, done: false }])
    setTask("")
  }

//funcion borrar Task
const handleDeleteTask = (deleteTask) => {
  const newArray = taskList.filter((item) => item !== deleteTask);
  setArrayTasks(newArray);
}

return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Agregar Task"
      />
      <ul>
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Eliminar</button>
            </li>
          ))
        ) : (
          <li>No hay tareas, añadir tareas</li>
        )}
      </ul>
    </div>
  );
}

export default Lista;