import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService, UsersService]
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
  image: string;
  tags: any = [];
  posts: any = [];
  user: object = {
    firstName: '',
    lastName: ''
  };
  private sub: any;
  // route: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsData: PostsService,
    private usersData: UsersService
  ) {}

  ngOnInit() {
    this.sub = this.router.routerState
      .parent(this.route)
      .params.subscribe(params => {
        this.id = +params.id; // (+) converts string 'id' to a number
        console.log(params);

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
    this.usersData.getUser(this.id).subscribe(usersData => {
      this.user = usersData;
      // this.user.phone = userData.phone
      console.log(this.user);
      // console.log(userData.phone);
    });
  }
}
