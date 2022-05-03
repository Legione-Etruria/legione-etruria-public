import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  @ViewChild('slideShowContainer') private slideshow!: ElementRef;
  private interval!: any;
  public timeLeft!: number;
  constructor(
    private titleService: Title,
    private viewportScroller: ViewportScroller
  ) {
    titleService.setTitle('Chi siamo');
  }
}
