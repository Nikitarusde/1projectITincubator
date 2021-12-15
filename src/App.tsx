import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

//CRUD
function App() {
    //BLL:
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
    ])

    const todoListTitle: string = "What to learn"


    const removeTask = (id: number) => {
        const filteredTasks: Array<TaskType> = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)

    }

    let tasksForRender = tasks;
    if(filter === "active"){
        tasksForRender = tasks.filter(t => !t.isDone)
    }
    if(filter === "completed"){
        tasksForRender = tasks.filter(t => t.isDone)
    }


    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForRender}
                removeTask={removeTask}
            />
        </div>
    )
}

export default App;


