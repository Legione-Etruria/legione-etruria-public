import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('Cursor') cursor: ElementRef | undefined;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: PointerEvent) {
    if (!this.cursor) {
      return;
    }

    if (!this.cursor) {
      return;
    }
    this.cursor.nativeElement.style.left = event.pageX - 10 + 'px';
    this.cursor.nativeElement.style.top = event.pageY - 10 + 'px';
  }

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    this.cursor?.nativeElement.classList.add('expand');

    setTimeout(() => {
      this.cursor?.nativeElement.classList.remove('expand');
    }, 500);
  }
}
