import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService, PostsService]
})
export class UsersComponent implements OnInit {
  // id: number = null;
  users: object = [];
  //passes down to child component - posts.component.ts
  posts: any = [];
  userId: number = null;
  userImage: string = '';
  firstName: string = '';
  lastName: string = '';
  showPosts: boolean = false;
  showNoPosts: boolean = false;

  getAge(dob) {
    const dateNum: number = Number(new Date(Date.now()));
    // console.log(dateNum);
    const dobNum: number = Number(new Date(dob));
    // console.log(dobNum);
    const age: number = Math.floor((dateNum - dobNum) / 31556952000);
    return age;
  }

  handleClick(user: any) {
    console.log('user ID ' + user.id);

    this.userImage = user.image;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    console.log(this.firstName);

    // this.userId = user.id;
    // console.log(this.userId)
    // this.postsData.getPosts(user.id).subscribe(postsData => {
    //   this.posts = postsData;
    //   console.log(this.posts);
    //   console.log(user.id);

      // if (this.posts.length > 0) {
      //   console.log(this.posts);
      //   this.showPosts = true;
      //   this.showNoPosts = false;
      // } else {
      //   console.log(this.posts);
      //   this.showPosts = false;
      //   this.showNoPosts = true;
      // }
    // });
  }

  // get services
  constructor(
    private usersData: UsersService,
    private postsData: PostsService
  ) {}

  // get all users
  ngOnInit() {
    this.usersData.getUsers().subscribe(usersData => {
      this.users = usersData;
      console.log(this.users);
    });
  }
}
