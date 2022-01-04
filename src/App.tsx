import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}

function App() {
    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });
    const removeTodolist = (todoListId: string) => {
        setTodolists(todolists.filter(f => f.id !== todoListId))
        delete tasks[todoListId]
    }

    function removeTask(todoListId:string, id: string) {
        setTasks({...tasks,[todoListId]:tasks[todoListId].filter(f => f.id !== id)})

        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todoListId:string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};

        setTasks({...tasks,[todoListId]:[newTask,...tasks[todoListId]]})
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todoListId:string, taskId: string, isDone: boolean) {
        setTasks({...tasks,[todoListId]:tasks[todoListId].map(t => t.id === taskId ? {...t,isDone}: t)})

        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }







    function changeFilter(value: FilterValuesType, todoListId:string) {
        setTodolists (todolists.map(t => t.id === todoListId ? {...t, filter: value} : t))
    }


    return (
        <div className="App">
            {
                todolists.map((t) => {
                    let tasksForTodolist = tasks[t.id];
                    if (t.filter === "active") {
                        tasksForTodolist = tasks[t.id].filter(t => t.isDone === false);
                    }
                    if (t.filter === "completed") {
                        tasksForTodolist = tasks[t.id].filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={t.id}
                            todoListId = {t.id}
                            title={t.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={t.filter}
                            removeTodolist={removeTodolist}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;
