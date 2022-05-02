




import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/models/todo";
import { Action } from "@ngrx/store";
import { Type } from "@angular/core";


// löst ein effekt aus, der wiederum mein Localstorageservice aufruft aus dem Local Storage
//export const GET_TODO = createAction('[Todo] Get Tasks');


// der return vom Effekt is getTodosSuccess, wenn success dann in array übergeben
//export const getTodosSuccess = createAction('[Todo] Got Tasks succesfully',
//   props<{todoList:Todo[]}>()
//  );


 // Hier kommt die Load Action
export const LoadTodos = createAction('[Todo] Load Todo')

export const LoadTodoSucces = createAction('[Todo] Load Todo success',
 props<{todoList: ReadonlyArray<Todo>}>())


 // Hier kommt die Add Action
export const addTodo = createAction('[Todo] Add Todo',
(todo: Todo)=> todo);

 export const addTodoSuccess = createAction('[Todo] Add Todo Success',
 props<{todoList: ReadonlyArray<Todo>}>())


 // Hier kommt die Remove Action
 export const removeTodo = createAction('[Todo] Remove Todo')

 export const removeAllSuccess = createAction('[Todo] Remove Todo Success')


 //Hier kommt die RemoveItem Action
 export const removeItemTodo = createAction('[Todo] RemoveItem Todo',
 props<{index:number}>())

 export const removeItemSuccess = createAction('[Todo] RemoveItem Todo Success',
 props<{index:number}>())


 // Hier kommt die Edit Action
 export const editTodo = createAction('[Todo] Edit Todo',
 props<{index:number, todo: Todo}>())

 export const editTodoSuccess = createAction('[Todo] Edit Todo Success',
 props<{index:number, todo: Todo}>())

