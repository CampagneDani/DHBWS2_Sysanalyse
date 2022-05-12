import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Assignment Abgabe', date: '2022-05-15' },
      { title: 'Sales and Consulting Abgabe', date: '2022-05-09' },
      { title: 'Feiertag Christi Himmekfahrt', date: '2022-05-26' },
      { title: 'Grundlegende Konzepte der IT Klausur', date: '2022-05-30' },
      { title: 'Programmierung II Klausur', date: '2022-06-03' },
      { title: 'Mathematik, Logik und Algebra Klausur', date: '2022-06-07' },
      { title: 'Grundlagen der Rechnungslegung Klausur', date: '2022-06-10' },
      { title: 'SemesterSuff', date: '2022-06-10' },
    
    ]
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

}