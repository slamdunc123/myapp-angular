import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private usersData: UsersService,
    private commentsData: CommentsService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
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
