import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/todo";
import { addTodo, addTodoSuccess, editTodoSuccess, LoadTodos, removeItemSuccess } from "./ToDoActions"
import { LoadTodoSucces, removeAllSuccess } from "./ToDoActions";


export interface TodoState{
    todoList: ReadonlyArray<Todo>;
}

export const initalState: TodoState ={todoList:[]};

export const todoReducer = createReducer(
    initalState,
   // on(addTodo,(state,todoList)=> 
     //   [...state, todoList]
    //),
    on(addTodoSuccess,(state, {todoList})=> ({
        ...state, 
      todoList: [...todoList]
    })
),
    on(LoadTodoSucces,(state, {todoList})=> ({
        ...state, 
      todoList: [...todoList]
    })),
    on(removeAllSuccess,(state)=> ({
      ...state, 
    todoList: []
    
    })),
    on(removeItemSuccess,(state, {index})=> ({
      ...state,
       
    todoList: state.todoList.slice(index)
  
    })),
    on(editTodoSuccess,(state, {index, todo})=> {
      const updatedTodoList = [...state.todoList]
      updatedTodoList[index] = todo
      return {...state, todoList: updatedTodoList}
      
     
    })
  );



