import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signin/signup/signup.component';
import { ForgotpasswordComponent } from './signin/forgotpassword/forgotpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PostsComponent } from './posts/posts.component';
import { NewpostComponent } from './posts/newpost/newpost.component';
import { ShowpostComponent } from './posts/showpost/showpost.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserprofileComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: NewpostComponent },
  { path: 'posts/:id', component: ShowpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
