import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService, UsersService, CommentsService]
})
export class PostsComponent implements OnInit {
  // inputs from parent component - users.component.ts
  // @Input() userId: number;
  // @Input() firstName: string;
  // @Input() lastName: string;
  // // @Input() posts: object;
  // @Input() showPosts: boolean;
  // @Input() showNoPosts: boolean;

  id: number;
  postId: number;
  image: string;
  tags: any = [];
  posts: any = [];
  user: object = {
    firstName: '',
    lastName: ''
  };
  comments: any = [];
  postComments: any = [];

  show: number = null;
  private sub: any;

  // route: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsData: PostsService,
    private usersData: UsersService,
    private commentsData: CommentsService, // private commentsForPostData: CommentsService
    private postCommentsData: CommentsService // private commentsForPostData: CommentsService
  ) {}

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      console.log(params);
    });
    console.log(this.id);

    this.postsData.getPosts(this.id).subscribe(postsData => {
      this.posts = postsData;
      console.log(this.posts);
    });

    this.usersData.getUser(this.id).subscribe(usersData => {
      this.user = usersData;
      console.log(this.user);
    });

    this.commentsData.getComments(this.id).subscribe(commentsData => {
      this.comments = commentsData;
      console.log(this.comments);
    });

    // this.postCommentsData
    //   .getCommentsForPost(this.id, this.postId)
    //   .subscribe(postCommentsData => {
    //     this.postComments = postCommentsData;
    //     // this.user.phone = userData.phone
    //     console.log(this.postComments);
    //     // console.log(userData.phone);
    //   });
  }

  showComments(post, i) {
    const postCommentsData = this.comments.filter(
      comment => comment.postId === post.id
    );
    console.log(post.id);
    console.log(i);
    console.log('show');
    console.log(postCommentsData);
    this.postComments = postCommentsData;

    this.postId = post.id;
    this.show = i;
    // this.show = !this.show;
  }
  hideComments(post, i) {
    console.log(post.id);
    console.log(i);
    console.log('hide');
    // this.show = !this.show;
    // this.postId = post.id;
    this.show = null;
  }
}
