import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchRequestService } from '../search-request.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public searchMe = 'Ngina-G';
  public githubUser: string;

  users: User ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 13;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}


  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;

  }}