import { Component, OnInit } from '@angular/core';

import { PostModel } from 'src/app/models/postmodel';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-DHBW-Feed',
  templateUrl: './DHBW-Feed.component.html',
  styleUrls: ['./DHBW-Feed.component.css']
})
export class DHBWFeedComponent implements OnInit{
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
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/Chicago_Bulls_logo.svg.png",
        name:"Justin Bullbauch",
        date: "4 hours ago",
        postText: "Endlich wieder ein voller Erfolg bei meinen Aktien, 45€ Dividente in einer Woche, tritt jetzt meiner Gruppe bei!1!11!!1!",
        postPhoto: "assets/img/WhatsApp Image 2022-05-05 at 11.41.29.jpeg",
        likeCount: 17,
      } as PostModel,
      {
        profilePhoto: "assets/img/yumyum.jpg",
        name:"J.A(rndt).N.I.K",
        date: "7 hours ago",
        postText: "Der Dulli @Justin_Bullbauch ist wieder ein absolutes meme nach seiner Aktieninvestiernacht",
        postPhoto: "assets/img/WhatsApp Image 2022-05-05 at 11.41.30.jpeg",
        likeCount: 23,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"Marcel StriebRitz",
        date: "8 hours ago",
        postText: "Wer würde gerne die Banane so abgeschmatzt bekommen?",
        postPhoto: "assets/img/WhatsApp Image 2022-05-05 at 11.41.28.jpeg",
        likeCount: 41,
      } as PostModel,

    ];
  } }