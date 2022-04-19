import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { SearchRequestService } from '../search-request.service';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {


  user!: User;

  constructor(
    private userService: UserService,
    private searchRequestService: SearchRequestService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => {
      this.user = user;
      this.searchRequestService.getRequestLimit().subscribe();
    });
  }

}
