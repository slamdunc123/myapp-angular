import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  // inputs from parent component - users.component.ts
  @Input() userId: number;
  @Input() firstName: string;
  @Input() lastName: string;
  // @Input() posts: object;
  @Input() showPosts: boolean;
  @Input() showNoPosts: boolean;

  id: number;
  posts: any = [];
  private sub: any;
  // route: any;

  constructor(private route: ActivatedRoute, private postsData: PostsService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    console.log(this.id);

    this.postsData.getPosts(this.id).subscribe(postsData => {
      this.posts = postsData;
      console.log(this.posts);

      if (this.posts.length > 0) {
        console.log(this.posts);
        this.showPosts = true;
        this.showNoPosts = false;
      } else {
        console.log(this.posts);
        this.showPosts = false;
        this.showNoPosts = true;
      }
    });
  }
}
