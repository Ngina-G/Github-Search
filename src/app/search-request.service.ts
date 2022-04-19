import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  // repos!: Repository;
  // users: User;
  // newRepository: any;
  // searchRepo: any;


  constructor(private http: HttpClient) {}

  getRequestLimit() {
    return this.http.get<any>(environment.requestLimit);
  }


  // githubUser(searchName:any) {
  //     interface ApiResponse {
  //         name: string;
  //         html_url: string;
  //         description: string;
  //         created_at: Date;
  //         login: string;
  //         public_repos: number;
  //         followers: number;
  //         following: number;
  //         avatar_url: string;
  //     }

  //     const promise = new Promise((resolve:any) => {
  //         this.http.get<ApiResponse>('https://api.github.com/users/' + searchName + '?access_token=' + environment.githubApi).toPromise().then(getResponse => {
  //             this.users.name = getResponse.name;
  //             this.users.html_url = getResponse.html_url;
  //             this.users.login = getResponse.login;
  //             this.users.avatar_url = getResponse.avatar_url;
  //             this.users.public_repos = getResponse.public_repos;
  //             this.users.created_at = getResponse.created_at;
  //             this.users.followers = getResponse.followers;
  //             this.users.following = getResponse.following;
  //             resolve();
  //         },);
  //     });
  //     return promise;

  // }

  // gitUserRepos(searchMe:any) {
  //     interface ApiResponse {
  //         name: string;
  //         description: string;
  //         created_at: Date;
  //     }

  //     const myPromise = new Promise((resolve:any, reject) => {
  //         this.http.get<ApiResponse>('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + environment.githubApi).toPromise().then(getRepoResponse => {
  //             this.newRepository = getRepoResponse;
  //             resolve();
  //         }, error => {
  //             reject(error);
  //         });
  //     });
  //     return myPromise;
  // }


  // gitRepos(searchName:any) {
  //     interface ApiResponse {
  //         items: any;
  //     }

  //     const promise = new Promise((resolve:any, reject) => {
  //         this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.githubApi).toPromise().then(getRepoResponse => {
  //             this.searchRepo = getRepoResponse.items;

  //             resolve();
  //         }, error => {
  //             this.searchRepo = 'error';
  //             reject(error);
  //         });
  //     });
  //     return promise;
  // }
}
