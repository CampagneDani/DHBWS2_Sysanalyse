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

  ngOnInit(): void {
  
  } }
