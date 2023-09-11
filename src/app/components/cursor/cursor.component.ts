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
  private _currentScale = 1;
  private _defaultWidth = '22px';

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('Cursor') cursor: ElementRef | undefined;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: PointerEvent) {
    if (!this.cursor) {
      return;
    }

    let cursorType = window.getComputedStyle(this.cursor.nativeElement).cursor;

    // If the cursor is 'auto', get the underlying cursor type
    if (cursorType === 'auto') {
      cursorType = this._getUnderlyingCursorType(event);
    }
    // Rest of the code
    switch (cursorType) {
      case 'pointer':
        this._pointerMouse(this.cursor.nativeElement);
        break;
      case 'text':
        this._textMouse(this.cursor.nativeElement);
        break;

      default:
        this._defaultMouse(this.cursor.nativeElement);
        break;
    }

    this.cursor.nativeElement.animate(
      [
        {
          left: `${event.pageX - 10}px`,
          top: `${event.pageY - 10}px`,
        },
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
          scale: this._currentScale,
        },
        {
          border: `1px solid rgb(255, 255, 255)`,
          scale: this._currentScale * 2,
        },
        {
          scale: this._currentScale,
          width: this._defaultWidth,
        },
      ],
      {
        duration: 500,
        fill: 'both',
      }
    );
  }

  private _getUnderlyingCursorType(event: PointerEvent): string {
    const element = document.elementFromPoint(event.clientX, event.clientY);

    if (!element) {
      return 'default';
    }

    const selection = window.getSelection();

    if (selection && selection.type === 'Range') {
      return 'text';
    }

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement
    ) {
      return 'text';
    }

    const computedStyle = window.getComputedStyle(element);
    return computedStyle.cursor;
  }

  private _pointerMouse(cursor: HTMLElement) {
    cursor.animate(
      [
        {
          scale: 2.5,
          background: 'white',
          opacity: 0.8,
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );

    this._currentScale = 2.5;
  }

  private _textMouse(cursor: HTMLElement) {
    cursor.animate(
      [
        {
          width: '5px',
          background: '#fff',
          'border-radius': '1%',
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );
  }

  private _defaultMouse(cursor: HTMLElement) {
    cursor.animate(
      [
        {
          scale: 1,
          background: 'transparent',
          width: this._defaultWidth,
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );

    this._currentScale = 1;
  }
}
