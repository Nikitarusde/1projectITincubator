import {TasksStateType} from '../App';
import {v1} from "uuid";
import {AddTodolistActionType} from "./todolists-reducer";


export type FirstTaskActionType = {
    type: 'REMOVE-TASK',
    taskID: string,
    todolistID: string
}
export type SecondTaskActionType = {
    type: 'ADD-TASK',
    title: string,
    todolistID: string
}

export type ChangeTaskType = {
    type: "CHANGE-TASK"
    taskID: string
    todolistID: string
    isDone: boolean
}
export type ChangeTaskTitleType = {
    type: "CHANGE-TASK-TITLE",
    taskID: string
    todolistID: string
    title: string
}


type ActionsType = FirstTaskActionType | SecondTaskActionType | ChangeTaskType | ChangeTaskTitleType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistID]: state[action.todolistID].filter(f=> f.id !== action.taskID)}
        }
        case 'ADD-TASK': {
            const newTack = {id: v1(), title: action.title, isDone: false}
            return {...state, [action.todolistID]: [newTack,...state[action.todolistID]]}
        }
        case "CHANGE-TASK": {
            return {...state, [action.todolistID]: state[action.todolistID].map(m=> m.id === action.taskID ? {...m, isDone: action.isDone}: m)}
        }
        case "CHANGE-TASK-TITLE":{
            return {...state, [action.todolistID]: state[action.todolistID].map(m=> m.id === action.taskID ? {...m, title: action.title}: m)}
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTodolistAC = (taskID: string, todolistID: string): FirstTaskActionType => {
    return { type: 'REMOVE-TASK', taskID, todolistID}
}
export const AddTodolistAC = (title: string, todolistID: string): SecondTaskActionType => {
    return { type: 'ADD-TASK', title, todolistID}
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): ChangeTaskType  => {
    return{ type: "CHANGE-TASK", taskID, todolistID, isDone}
}
export const changeTaskTitleAC = (taskID: string, title: string, todolistID: string): ChangeTaskTitleType  => {
    return{ type: "CHANGE-TASK-TITLE", taskID, todolistID, title}
}

