import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() paths: string[] = [];

  public currentIndex: number = 0;

  public previousItem = '';
  public currentItem = '';
  public nextItem = '';

  constructor() {}

  ngOnInit(): void {
    this.currentItem = this.paths[this.currentIndex];
    this.nextItem = this.paths[this.currentIndex + 1];

    this.bootstrapCarousel();
  }

  public bootstrapCarousel(): void {
    setTimeout(() => {
      this.currentIndex + 1 < this.paths.length
        ? this.currentIndex++
        : (this.currentIndex = 0);

      this.previousItem =
        this.paths[
          this.currentIndex - 1 < 0
            ? this.paths.length - 1
            : this.currentIndex - 1
        ];

      this.currentItem = this.paths[this.currentIndex];
      this.nextItem =
        this.currentIndex + 1 < this.paths.length
          ? this.paths[this.currentIndex + 1]
          : this.paths[0];

      this.bootstrapCarousel();
    }, 2000);
  }
}
