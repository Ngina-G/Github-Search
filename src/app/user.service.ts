import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { observable } from 'rxjs';
import { SearchRequestService } from './search-request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private defaultUsername = 'Ngina-G';
  private userSource = new BehaviorSubject<any>(null);
  user = this.userSource.asObservable();
  GH_API_URL = 'https://api.github.com';
  BASEREPO_URL: string = `https://api.github.com/users/${this.user}/repos`;
  BASE_URL: string = '';

  constructor(
    private http: HttpClient,
    private searchRequestService: SearchRequestService) {
      // this.repository = new Repository('', '', '', new Date());
      // this.users = new User('', '', '', 0, '', new Date(), 0, 0);
      this.getUser(this.defaultUsername);
  }


  async getUser(username: string) {
    const value = this.http.get(`${environment.githubApi}/users/${username}`);
    return await lastValueFrom(value)
      .then((user:any) => {
        this.userSource.next(user);
        return [user];
      })
      .catch((error) => {
        let users: any = [];
        if (error.status === 404) {
          const data = this.searchUser(username).then((result) => {
            if (result.total_count === 1) {
              // Check if it's 1 user returned
              this.userSource.next(result.items[0]);
              return result.items;
            }
            return (users = result.items);
          });
          return (users = data);
        }
        return users;
      });
  }

  async searchUser(username: string) {
    const value = this.http.get(
      `${environment.githubApi}/search/users?q=${username}&per_page=3&sort=joined&order=asc`
    );
    return await lastValueFrom(value)
      .then((result:any) => {
        return result;
      })
      .catch((error) => error);
  }
}
