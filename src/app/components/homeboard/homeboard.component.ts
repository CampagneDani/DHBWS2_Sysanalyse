import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postmodel';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-homeboard',
  templateUrl: './homeboard.component.html',
  styleUrls: ['./homeboard.component.css']
})
export class HomeboardComponent implements OnInit{
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
  } }
