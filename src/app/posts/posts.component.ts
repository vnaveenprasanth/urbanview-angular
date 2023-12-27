import { Component } from '@angular/core';
import { posts } from '../mock';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
  
  
export class PostsComponent {
  posts = posts
}
