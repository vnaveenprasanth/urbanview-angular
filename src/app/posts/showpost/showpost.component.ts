import { Component, ViewChild } from '@angular/core';
import { posts } from '../../mock';
import { CarouselComponent } from '../../carousel/carousel.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrl: './showpost.component.css',
})
export class ShowpostComponent {
  constructor(private route: ActivatedRoute) {}

  @ViewChild(CarouselComponent) imageCarousel!: CarouselComponent;

  post: any;

  private intervalId: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const postId = +params['id'];
      this.post = posts.find((p) => p.id === postId);
    });

    this.intervalId = setInterval(() => {
      console.log('incarouselcb');
      this.imageCarousel.shownextImage();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
