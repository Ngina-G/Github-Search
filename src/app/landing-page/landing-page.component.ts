import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchRequestService } from '../search-request.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  defaultUser!: User;
  @Output() user: EventEmitter<User> = new EventEmitter();

  constructor(
    private userService: UserService, 
    private router: Router) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => (this.defaultUser = user));
  }

  newSearch(username: string): void {
    this.userService
      .getUser(username)
      .then((users) => {
        if (users.length === 1) {
          this.router.navigate([`/${this.defaultUser.login}/repos`]);
        }
      })
      .catch((error) =>
        error.status === 404
          ? `No user with username: ${username}`
          : 'Check username and try again'
      );
  }
}