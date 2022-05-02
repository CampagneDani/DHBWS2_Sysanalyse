import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { LocalStorageService } from './services/local-storage.service';
import { Todo } from './models/todo';
import { PostModel } from './models/postmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-mateiral';
  public newsFeedPosts: PostModel[] =[];
  aufgaben: Todo[];

  constructor() {}
// es klappen nur jpg!!!!!!!
  ngOnInit(): void {
    this.newsFeedPosts =[
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "1 hours ago",
        postText: "Hey guys, hab drafts geschaut und werde mein Studium abbrechen für Stumble guys Esport",
        postPhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        likeCount: 12,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "1 hours ago",
        postText: "Hey guys, hab drafts geschaut und werde mein Studium abbrechen für Stumble guys Esport",
        postPhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        likeCount: 12,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "1 hours ago",
        postText: "Hey guys, hab drafts geschaut und werde mein Studium abbrechen für Stumble guys Esport",
        postPhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        likeCount: 12,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "1 hours ago",
        postText: "Hey guys, hab drafts geschaut und werde mein Studium abbrechen für Stumble guys Esport",
        postPhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        likeCount: 12,
      } as PostModel,

    ];
  }
}

//ngrx: einbauen, eine zwischenschicht. ich hol mir daten über den Store, um dann refresh zu ersetzen.
// -> action; get erstellen, diesen dann als dispatch erstellen und das refresh ersetzen
// TODO für store verwenden. zuerst den state anklicken: 
//store modul importieren state anlegen, aktionen definieren und zu den aktionen effekte die den service aufrufen, 
//den reducer die wiederum in den store schreiben und dann einen selector um aus dem store auszuschreiben