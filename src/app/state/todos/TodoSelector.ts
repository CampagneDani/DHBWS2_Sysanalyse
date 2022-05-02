
import { TodoState } from "../app.state";
import {createFeatureSelector, createSelector} from '@ngrx/store'
import { state } from "@angular/animations";


const getTodoState = createFeatureSelector<TodoState>('todoList');

export const getAufgaben = createSelector(getTodoState, state =>{
    console.log(state)
    return state.todoList;
});