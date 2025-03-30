import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor(private _scroller: ViewportScroller) {}

  rotateItem(event: MouseEvent, coeff = 50) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const centerX = cardWidth / 2;
    const centerY = cardHeight / 2;

    const rotateX = (centerY - y) / coeff;
    const rotateY = (x - centerX) / coeff;
    const translateZ = Math.abs((centerY - y) / 10);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
  }

  resetItem(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = '';
  }

  public scrollToAnchor(anchor: string): void {
    this._scroller.scrollToAnchor(anchor);
  }

  public currentTailwindMediaQuery():
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl' {
    const width = window?.innerWidth;

    if (width >= 1536) {
      return '2xl';
    }

    if (width >= 1280) {
      return 'xl';
    }

    if (width >= 1024) {
      return 'lg';
    }

    if (width >= 768) {
      return 'md';
    }

    if (width >= 640) {
      return 'sm';
    }

    return 'none';
  }
}
