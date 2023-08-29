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

    this.cursor.nativeElement.style.background = 'transparent';

    this.cursor.nativeElement.animate(
      [
        {
          left: `${event.pageX - 10}px`,
          top: `${event.pageY - 10}px`,
          // background: '#fff',
        },
        // {
        //   left: `${event.pageX - 10}px`,
        //   top: `${event.pageY - 10}px`,
        //   background: 'transparent',
        // },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );
  }

  @HostListener('document:click', ['$event'])
  onClick(event: PointerEvent) {
    this.cursor?.nativeElement.animate(
      [
        {
          scale: 1,
        },
        {
          border: `1px solid rgb(255, 255, 255)`,
          scale: 2.5,
        },
        {
          scale: 1,
        },
      ],
      {
        duration: 500,
        fill: 'both',
      }
    );
  }
}
