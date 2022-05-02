//Definieren, "abteil im Store" hier die in die liste vom todo reinschreiben
import { Todo } from "../models/todo";


export interface TodoState{
    todoList: Todo[];
}

export const initalState : TodoState = {
    todoList:[],
};