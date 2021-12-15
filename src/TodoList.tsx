import React from 'react';
import {TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
}

const TodoList = (props: TodoListPropsType) => {
    const tasksList = props.tasks.map((task: TaskType) => {
        return(
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={()=>props.removeTask(task.id)}>x</button>
            </li>
        )
    })

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                { tasksList }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}

export default TodoList;