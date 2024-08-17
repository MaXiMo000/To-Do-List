import React, {useState} from "react";

function Todo(){
    const [todo, settodo] = useState(["Eat BreakFast", "Do Dishes"]);
    const [newTask, setTask] = useState("");

    function addTask(){
        if(newTask.trim() !== ""){
            settodo(t => [...t, newTask]);
            setTask("");
        }
        else{
            console.warn("Nothing Written");
        }
    }

    function removeitem(index){
        const updatedTasks = todo.filter((_, i)=> i != index);
        settodo(updatedTasks);
    }

    function handleInput(event){
        setTask(event.target.value);
    }

    function itemUp(index){
        if(index > 0){
            const updatedTasks = [...todo];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            settodo(updatedTasks);
        }
    }

    function itemDown(index){
        if(index < todo.length - 1){
            const updatedTasks = [...todo];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            settodo(updatedTasks);
        }
    }

    return(
        <div className="todo-container">
            <h1>To-Do List</h1>

            <div className="input-container">
                <input type="text" placeholder="Enter The Text" onChange={handleInput} value={newTask}/>
                <button className="add-button" onClick={addTask} >Add To List</button> <br />
            </div>

            <ol>
                {todo.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span> 
                        <button className="delete-button" onClick={() => removeitem(index)}>Delete</button>
                        <button className="up-button" onClick={() => itemUp(index)}>Up</button>
                        <button className="down-button" onClick={() => itemDown(index)}>Down</button>
                    </li>
                    )}
            </ol>
        </div>
    );
}

export default Todo;