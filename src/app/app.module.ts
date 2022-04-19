import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeagoModule } from 'ngx-timeago';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { RouterModule } from '@angular/router';
import { SearchRequestService } from './search-request.service';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserCompComponent } from './user-comp/user-comp.component';
import { FormComponent } from './form/form.component';
import { RepoCompComponent } from './repo-comp/repo-comp.component';
import { RepositroriesPageComponent } from './repositrories-page/repositrories-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    RepositoriesComponent,
    UserCompComponent,
    FormComponent,
    RepoCompComponent,
    RepositroriesPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TimeagoModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
