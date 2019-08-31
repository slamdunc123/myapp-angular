import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  providers: [UsersService, CommentsService]
})
export class ActivityComponent implements OnInit {
  id: number;
  authId: number;
  user: object = {
    firstName: '',
    lastName: ''
  };
  comments: any = [];
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersData: UsersService,
    private commentsData: CommentsService
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
    this.usersData.getUser(this.id).subscribe(usersData => {
      this.user = usersData;
      // this.user.phone = userData.phone
      console.log(this.user);
      // console.log(userData.phone);
    });
    this.commentsData.getComments(this.id).subscribe(commentsData => {
      this.comments = commentsData;
      // this.user.phone = userData.phone
      console.log(this.comments);
      // console.log(userData.phone);
    });
  }
}
