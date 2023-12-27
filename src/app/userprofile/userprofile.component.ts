import { Component } from '@angular/core';
import { posts } from '../mock';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  posts = posts;
}
