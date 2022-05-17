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
  

  constructor() {}

  ngOnInit(): void {
    this.newsFeedPosts =[
      {
        profilePhoto: "assets/img/yumyum.jpg",
        name:"J.A(rndt).N.I.K",
        date: "1 hours ago",
        postText: "Wenn die Dozenten nach 2h erst pause machen:",
        postPhoto: "assets/img/karin.png",
        likeCount: 27,
      } as PostModel,
      {
        profilePhoto: "assets/img/marcel.png",
        name:"Marcel StriebRitz",
        date: "8 hours ago",
        postText: "BananenMemeCounter +1",
        postPhoto: "assets/img/marcelbanane.png",
        likeCount: 71,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "9 hours ago",
        postText:"Passt auf euere Freundinnen auf, denn genau so slide ich in die DM´s",
        postVideo: "assets/img/davidslided.mp4",
        likeCount: 69,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/daniel.png",
        name:"dkxxp",
        date: "14 hours ago",
        postText: "Immer die Cookies ablehnen leute...",
        postVideo: "assets/img/gay.mp4",
        likeCount: 23,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "16 hours ago",
        postText: "GET SHIT ON!",
        postVideo: "assets/img/emote.mp4",
        likeCount: 12,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (3).png",
        name:"LionRazier",
        date: "17 hours ago",
        postText: "Niemand konnte ihm das Wasser reichen",
        postPhoto: "assets/img/MicrosoftTeams-image (4).png",
        likeCount: 20,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/marcel.png",
        name:"Marcel StriebRitz",
        date: "21 hours ago",
        postText: "BananenMemeCounter +1",
        postPhoto: "assets/img/marcel2banane.png",
        likeCount: 19,
      } as PostModel,
      {
        profilePhoto: "assets/img/yumyum.jpg",
        name:"J.A(rndt).N.I.K",
        date: "22 hours ago",
        postText: "Sorry Jungs,hattet recht:",
        postPhoto: "assets/img/paulinehopps.jpg",
        likeCount: 18,
      } as PostModel,
      {
        profilePhoto: "assets/img/Chicago_Bulls_logo.svg.png",
        name:"Justin Bullbauch",
        date: "2 hours ago",
        postText: "Cringe!! Einfach nur 2 lagiges Toilettenpapier??? Wo gehen unsere Steuern oder Studiengebühren denn hin?? In den Dozentenkaffee?!1!11! By the way: Allianz aktie mit 10er Hebel heute kaufen",
        postPhoto: "assets/img/memejustin.png",
        likeCount: 9,
      } as PostModel,
      {
        profilePhoto: "assets/img/marcel.png",
        name:"Marcel StriebRitz",
        date: "29 hours ago",
        postText: "BananenMemeCounter +1",
        postPhoto: "assets/img/justinbanane.png",
        likeCount: 24,
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        name:"xXDavid HollbachXx",
        date: "32 hours ago",
        postText: "Hey guys, hab drafts geschaut und werde mein Studium abbrechen für Stumble guys Esport",
        postPhoto: "assets/img/MicrosoftTeams-image (2).jpg",
        likeCount: 12,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/MicrosoftTeams-image (3).png",
        name:"LionRazier",
        date: "33 hours ago",
        postText: "Props an Daniel, dieses Video von xXDavid HollbachXx ist einfach zu wild",
        postVideo: "assets/img/davidmeme.mp4",
        likeCount: 42069,
        viewProfile:"1",
      } as PostModel,
      {
        profilePhoto: "assets/img/marcel.png",
        name:"Marcel StriebRitz",
        date: "34 hours ago",
        postText: "BananenMemeCounter +1",
        postPhoto: "assets/img/robinbanane.png",
        likeCount: 41,
      } as PostModel,
      {
        profilePhoto: "assets/img/Chicago_Bulls_logo.svg.png",
        name:"Justin Bullbauch",
        date: "35 hours ago",
        postText: "Endlich wieder ein voller Erfolg bei meinen Aktien, 45€ Dividente in einer Woche, tritt jetzt meiner Gruppe bei!1!11!!1!",
        postPhoto: "assets/img/WhatsApp Image 2022-05-05 at 11.41.29.jpeg",
        likeCount: 17,
      } as PostModel,
      {
        profilePhoto: "assets/img/yumyum.jpg",
        name:"J.A(rndt).N.I.K",
        date: "48 hours ago",
        postText: "Der Dulli @Justin_Bullbauch ist wieder ein absolutes meme nach seiner Aktieninvestiernacht",
        postPhoto: "assets/img/WhatsApp Image 2022-05-05 at 11.41.30.jpeg",
        likeCount: 23,
      } as PostModel,

    ];
  } }