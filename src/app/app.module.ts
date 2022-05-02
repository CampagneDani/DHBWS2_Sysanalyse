import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { AufgabenComponent } from './components/aufgaben/aufgaben.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { StoreModule } from '@ngrx/store';
import { Effect, EffectsModule } from '@ngrx/effects';
import{todoReducer} from './state/todos/TodoReducer'
import { TodoEffects } from './state/todos/TodoEffects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PostComponent } from './components/DHBWNews/Post/post.component';
import { DHBWNewsComponent } from './components/DHBWNews/DHBWNews.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PopUpComponent,
    AufgabenComponent,
    CalculatorComponent,
    PostComponent,
    DHBWNewsComponent,
    DHBWNewsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todoList: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25, 
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects]),
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }