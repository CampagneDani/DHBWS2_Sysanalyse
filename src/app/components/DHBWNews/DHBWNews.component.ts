import { Component,Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postmodel';
@Component({
  selector: 'app-DHBWNews',
  templateUrl: './DHBWNews.component.html',
  styleUrls: ['./DHBWNews.component.css']
})
export class DHBWNewsComponent implements OnInit {

  @Input()
  public posts: PostModel[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}