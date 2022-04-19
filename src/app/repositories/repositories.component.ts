import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {


  repos: Repository[] = [];
  repoError: any;

  constructor(
    private repoService: RepoService,
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
      })
      .catch((error) => (this.repoError = error));
  }
//   repository!: Repository;
//   public searchRepo!: string;
//   public resultCount = 12;

//   searchRepos() {
//       this.searchRepo = '';
//       this.resultCount = 10;
//       this.getDataFunction();

//   }

//   constructor(public gitRepoRequest: SearchRequestService ) { }

// ngOnInit() {
//       this.resultCount = 5;
//     this.gitRepoRequest.gitRepos(this.searchRepo);
// }


//     getDataFunction() {
//         this.gitRepoRequest.gitRepos(this.searchRepo);

//     }
}
