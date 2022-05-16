import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DHBWFeedComponent } from './DHBW-Feed/DHBW-Feed.component';
import { ImpressumComponent } from './components/Impressum/Impressum.component';
import { DHBWStandorteComponent } from './DHBW-Standorte/DHBW-Standorte.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
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
    DHBWFeedComponent,
    ImpressumComponent,
    DHBWStandorteComponent,
    CalendarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todoList: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25, 
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodoEffects]),
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FullCalendarModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }