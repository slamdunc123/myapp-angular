import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [UsersService]
})
export class InfoComponent implements OnInit {
  id: number;
  user: object = {
    firstName: '',
    lastName: '',
    phone: null,
    email: '',
    dob: null,
    createdAt: null,
    location: {
      city: ''
    }
  };
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
    this.usersData.getUser(this.id).subscribe(usersData => {
      this.user = usersData;
      // this.user.phone = userData.phone
      console.log(this.user);
      // console.log(userData.phone);
    });
  }
}
