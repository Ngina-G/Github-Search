import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchRequestService } from '../search-request.service';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  providers: [ SearchRequestService],
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public searchMe = 'Ngina-G';
  public githubUser!: string;

  users!: User ;
  repository!: Repository;
  public searchRepo!: string;
  public resultCount = 13;


  findUser(username:any) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(
  public http: HttpClient,
  public githubUserRequest: SearchRequestService, 
  public userRepos: SearchRequestService) { }

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