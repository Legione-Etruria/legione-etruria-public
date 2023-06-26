import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Home');
  }

  public ngOnInit(): void {}

  visitLink(link: string) {
    console.log('visitLink', link);
    window.open(link);
  }

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
}
