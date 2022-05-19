import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeboardComponent } from './components/homeboard/homeboard.component';
import { AufgabenComponent } from './components/aufgaben/aufgaben.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DHBWNewsComponent } from './components/DHBWNews/DHBWNews.component';
import { DHBWFeedComponent } from './DHBW-Feed/DHBW-Feed.component';
import { ImpressumComponent } from './components/Impressum/Impressum.component';
import { DHBWStandorteComponent } from './DHBW-Standorte/DHBW-Standorte.component';
import { CalendarComponent } from './calendar/calendar.component';



const routes: Routes = [
  {path: 'Home', component: HomeboardComponent},
  {path:'SchwarzesBrett',component:AufgabenComponent},
  {path:'Taschenrechner',component:CalculatorComponent},
  {path:'DHBW_News', component:DHBWNewsComponent},
  {path:'DHBW_Memes', component:DHBWFeedComponent},
  {path:'Impressum', component:ImpressumComponent},
  {path:'DHBW-Standorte',component:DHBWStandorteComponent},
  {path: 'Calendar', component:CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeboardComponent,AufgabenComponent]