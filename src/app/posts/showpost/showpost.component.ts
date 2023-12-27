import { Component,ViewChild } from '@angular/core';
import { posts } from '../../mock';
import { CarouselComponent } from '../../carousel/carousel.component';
@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrl: './showpost.component.css',
})
export class ShowpostComponent {
  @ViewChild(CarouselComponent) imageCarousel!: CarouselComponent;

  post = posts[0];
  
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      console.log('incarouselcb')
      this.imageCarousel.shownextImage();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
