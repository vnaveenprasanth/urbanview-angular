import { Component } from '@angular/core';
import { posts } from '../mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
  
export class PostsComponent {
  constructor(private router: Router) {}

  posts = posts;

  goToPostShowPage(postId: number) {
    this.router.navigate(['/posts', postId]);
  }
}
