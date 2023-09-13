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

    const _pxOffset = 10;

    this.cursor.nativeElement.animate(
      [
        {
          left: `${event.pageX - _pxOffset}px`,
          top: `${event.pageY - _pxOffset}px`,
        },
      ],
      {
        duration: 400,
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
        duration: 350,
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
    this._currentScale = 2.5;

    cursor.animate(
      [
        {
          scale: this._currentScale,
          background: 'white',
          opacity: 0.2,
        },
      ],
      {
        duration: 300,
        fill: 'forwards',
      }
    );
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
