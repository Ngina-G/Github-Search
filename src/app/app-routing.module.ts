import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'users', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent },
  // {path: 'users', component: SearchComponent},
  // {path: 'repository', component: RepositoriesComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
