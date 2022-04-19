import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositroriesPageComponent } from './repositrories-page/repositrories-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: ':username/repos', component: RepositroriesPageComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
