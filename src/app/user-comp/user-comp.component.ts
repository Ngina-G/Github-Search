import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {


  user!: User;

  constructor(
    private userService: UserService,
    // private requestLimitService: RequestLimitService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
      this.user = user;
      // this.requestLimitService.getRequestLimit().subscribe();
    });
  }

}
