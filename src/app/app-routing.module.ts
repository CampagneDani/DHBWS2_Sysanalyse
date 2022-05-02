import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeboardComponent } from './components/homeboard/homeboard.component';
import { AufgabenComponent } from './components/aufgaben/aufgaben.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DHBWNewsComponent } from './components/DHBWNews/DHBWNews.component';

const routes: Routes = [
  {path: 'Home', component: HomeboardComponent},
  {path:'Todo-Liste',component:AufgabenComponent},
  {path:'Taschenrechner',component:CalculatorComponent},
  {path:'DHBW_News', component:DHBWNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeboardComponent,AufgabenComponent]