import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Repository } from './repository';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  repos!: Repository[];
  constructor(private http: HttpClient, private userService: UserService) {}

  async getRepos(username: string) {
    this.repos = [];
    const value = this.http.get<Repository[]>(
      `${environment.githubApi}/users/${username}/repos?per_page=50`    );
    await lastValueFrom(value)
      .then((repos) => (this.repos = repos))
      .catch((error) => error);
    return this.repos;
    console.log(this.repos);
  }}
