import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  providers: [UsersService]
})
export class ProfilesComponent implements OnInit {
  id: number;
  image: string;
  user: object = {
    // id: null,
    // firstName: '',
    // lastName: ''
  };
  private sub: any;
  // route: any;
  constructor(private route: ActivatedRoute, private usersData: UsersService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number

      
    });
    this.usersData.getUser(this.id).subscribe(usersData => {
      this.user = usersData;
      // this.user.phone = userData.phone
      console.log(this.user);
      console.log(this.id);

      // console.log(userData.phone);
    });
  }
}
