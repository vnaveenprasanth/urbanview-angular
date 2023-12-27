import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signin/signup/signup.component';
import { ForgotpasswordComponent } from './signin/forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { NewpostComponent } from './posts/newpost/newpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowpostComponent } from './posts/showpost/showpost.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    UserprofileComponent,
    NavbarComponent,
    PostsComponent,
    NewpostComponent,
    ShowpostComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
