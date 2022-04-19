import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';
import { ActivatedRoute } from '@angular/router';
import { SearchRequestService } from '../search-request.service';

@Component({
  selector: 'app-repo-comp',
  templateUrl: './repo-comp.component.html',
  styleUrls: ['./repo-comp.component.css']
})
export class RepoCompComponent implements OnInit {

  repos: Repository[] = [];
  repoError: any;

  constructor(
    private repoService: RepoService,
    private searchRequestService: SearchRequestService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(): void {
    const username = String(this.route.snapshot.paramMap.get('username'));
    this.repoService
      .getRepos(username)
      .then((repos) => {
        this.repos = repos;
        this.searchRequestService.getRequestLimit().subscribe();
      })
      .catch((error) => (this.repoError = error));
  }

}
