import { Injectable } from '@angular/core';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  get():  Todo[] {
    const localStorageAufgaben = localStorage.getItem('formdata');
    if (localStorageAufgaben) {
      return JSON.parse(localStorageAufgaben);
    } else {
      return [];
    }
  }
  set(aufgabe: Todo) {
    const array = this.get();
    array.push(aufgabe);
    localStorage.setItem('formdata', JSON.stringify(array));
    return array;
  }
  removeItem(index: number) {
    const array = this.get();
    array.splice(index, 1);
    localStorage.setItem('formdata', JSON.stringify(array));
  }
  removeAll(){
    localStorage.clear();
  }

  edit(index:number,aufgabe:Todo){
    const array = this.get();
    const existierendeaufgabe = array[index];
    if(aufgabe.titel){
      existierendeaufgabe.titel =aufgabe.titel; 

    }
    if(aufgabe.beschreibung){
      existierendeaufgabe.beschreibung =aufgabe.beschreibung; 

    }
    if(aufgabe.stunden){
      existierendeaufgabe.stunden =aufgabe.stunden; 

    }
    
      existierendeaufgabe.wichtig =aufgabe.wichtig; 
      
    localStorage.setItem('formdata', JSON.stringify(array));

  }
}
