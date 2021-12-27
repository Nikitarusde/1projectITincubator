import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

//CRUD
function App() {
    console.log(v1())
    //BLL:
    const [filter, setFilter] = useState<FilterValuesType>("all")
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: false},
    ])

    const todoListTitle: string = "What to learn"

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    const removeTask = (id: string) => {
        const filteredTasks: Array<TaskType> = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(), title, isDone: false
        }
        const copyState = [...tasks]
        copyState.unshift(newTask)
        setTasks(copyState)

        // const copyState = [newTask,...tasks]
        // setTasks(copyState)
    }
    const changeTaskStatus = (id: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone} : t))
    }

    let getTasksForRender = tasks;
    if (filter === "active") {
        getTasksForRender = tasks.filter(t => !t.isDone)
    }
    if (filter === "completed") {
        getTasksForRender = tasks.filter(t => t.isDone)
    }


    //UI:
    return (
        <div className="App">
            <TodoList
                filter={filter}
                title={todoListTitle}
                tasks={getTasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    )
}

export default App;


