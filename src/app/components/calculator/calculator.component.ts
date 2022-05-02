import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  button: string[] = ['7','8','9','*','4','5','6','-','1','2','3','+','0','C','/','=']
  result: string = '';
  

  

  constructor() { }

  ngOnInit(): void {
  }
 
  onButtonPress(value:string){
  
    if(this.result.length === 0 && value === '0'){
      return;
     }
     if(value === 'C'){
       return this.clear()
       
      
    }
  
    if(value === '='){
      this.validate()
      
    }

    else{
     this.result +=value
    } 
    
  }

  validate(){
    const tmpResult = eval(this.result);
    
    if(tmpResult === Infinity){
      this.result = 'Syntax-Error'
    }
    else{this.result = ""+tmpResult;}
  }
  clear(){
    
      this.result = '';
    
  }
}



//Switch case