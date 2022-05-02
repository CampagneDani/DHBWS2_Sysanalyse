import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { PopUpComponent } from '../pop-up/pop-up.component'; 
import { LocalStorageService } from '../../services/local-storage.service';
import { Todo } from '../../models/todo';
import { State, Store,select } from '@ngrx/store';
import { TodoState } from 'src/app/state/app.state';
import { getAufgaben } from 'src/app/state/todos/TodoSelector';
import { addTodo, addTodoSuccess, editTodo, LoadTodos, LoadTodoSucces, removeItemTodo, removeTodo } from 'src/app/state/todos/ToDoActions';



@Component({
  selector: 'app-aufgaben',
  templateUrl: './aufgaben.component.html',
  styleUrls: ['./aufgaben.component.css']
})
export class AufgabenComponent implements OnInit {

  
    title = 'angular-mateiral';
    
  
    todoList$ = this.store.select(getAufgaben);
    
    constructor(
      private localStorageService: LocalStorageService,
      private dialog: MatDialog,
      private store: Store<TodoState>,
      
    ) {}
  
    ngOnInit(): void {
      this.store.dispatch(LoadTodos());
    }
  
    openDialog() {
      const dialogRef = this.dialog.open(PopUpComponent);
      dialogRef.afterClosed().subscribe((aufgabe: Todo) => {
        if (aufgabe) {
          console.log(aufgabe)
         this.store.dispatch(addTodo(aufgabe))
        }
      });
    }
  
    removeItem(index:number) {
      this.store.dispatch(removeItemTodo({index}))
    }
  
    removeAllTodo() {
      this.store.dispatch(removeTodo());
    }

    editItem(index:number, aufgabe:Todo) {
      console.log(aufgabe)
      const dialogrefedit = this.dialog.open(PopUpComponent,{data : aufgabe })
      
      dialogrefedit.afterClosed().subscribe((updatedAufgabe: Todo) => {
        if (updatedAufgabe) {
  
          this.store.dispatch(editTodo({index, todo: aufgabe}))
        }
      });
      
      
      
      
     
     
    }
 }
 //edit/remove/removeitem in store