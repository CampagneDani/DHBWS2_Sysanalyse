
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";

import { catchError, EmptyError, exhaustMap, map, of, switchMap } from "rxjs";
import { Todo } from "src/app/models/todo";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { addTodo, addTodoSuccess, editTodo, editTodoSuccess, LoadTodos, LoadTodoSucces, removeAllSuccess, removeItemSuccess, removeItemTodo, removeTodo } from "./ToDoActions";
@Injectable()

export class TodoEffects{

    constructor(private action$: Actions, private localStorageService: LocalStorageService){}

    loadtd$ = createEffect(()=> this.action$.pipe(
        ofType(LoadTodos),
        switchMap(()=> of(this.localStorageService.get()).pipe(
            map((todoList) => LoadTodoSucces({todoList}))
            
        ))
     )
    );
    addtd$ = createEffect(()=> this.action$.pipe(
        ofType(addTodo),
        switchMap((newTodo)=> of(this.localStorageService.set(newTodo)).pipe(
            map((todoList) => addTodoSuccess({todoList}))
            
        ))) 
     );


     removealltd$ = createEffect(()=> this.action$.pipe(
        ofType(removeTodo),
        switchMap(()=> of(this.localStorageService.removeAll()).pipe(
            map((todoList) => removeAllSuccess()
            
        ))
     ) ));
     removeaItemtd$ = createEffect(()=> this.action$.pipe(
        ofType(removeItemTodo),
        switchMap((action)=> of(this.localStorageService.removeItem(action.index)).pipe(
            map(() => removeItemSuccess({index: action.index})
            
        ))
     ) ));

     edittd$ = createEffect(()=> this.action$.pipe(
        ofType(editTodo),
        switchMap((action)=> of(this.localStorageService.edit(action.index, action.todo)).pipe(
            map((todoList) => editTodoSuccess({index: action.index, todo: action.todo})    
        ))
      ) 
     )
    );
}
    


//unterschied zw promises un observables