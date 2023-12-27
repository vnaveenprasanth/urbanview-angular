import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() ImageUrls: string[] = [];

  currentIndex = 0;

  shownextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.ImageUrls.length;
  }

  
}
