import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postmodel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input()
  public post: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}