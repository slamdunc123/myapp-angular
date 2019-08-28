import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // inputs from parent component - users.component.ts
  @Input() userId: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() posts: object;
  @Input() showPosts: boolean;
  @Input() showNoPosts: boolean;

  constructor() {}

  ngOnInit() {}
}
