import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { RequestLimitService } from 'src/app/services/request-limit.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  requests: any = {};
  user!: User;

  constructor(
    private userService: UserService,
    private requestLimitService: RequestLimitService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => (this.user = user));
    this.requestLimitService.getRequestLimit().subscribe((response) => {
      this.requests.limit = response.resources.core.limit;
      this.requests.used = response.resources.core.used;
      this.requests.remaining = response.resources.core.remaining;
    });
  }
}