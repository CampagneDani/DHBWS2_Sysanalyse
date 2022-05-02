import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  
} from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Todo } from 'src/app/models/todo';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  formValue!: FormGroup;
  user: any = {};
  title = 'localStorage';
  myid!: any;
  myform: FormGroup;
  

  constructor(
    private formbuilder: FormBuilder,
    private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Todo | undefined
  ) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      titel: new FormControl('',[Validators.required,Validators.minLength(1)]),
      beschreibung: new FormControl(''),
      stunden: new FormControl('',[Validators.required,Validators.minLength(1)]),
      wichtig: new FormControl(''),
    });
    this.myform.controls['wichtig'].setValue(false);
    
    if(this.data){
      console.log(this.data)
      this.myform.setValue(this.data);
    }

  }

  get titel(){
    return this.myform.get('titel');
  }

  get stunden(){
    return this.myform.get('stunden');
  }

    

  save() {
    console.log(this.myform.value);
    this.dialogRef.close(this.myform.value);
  }
}
