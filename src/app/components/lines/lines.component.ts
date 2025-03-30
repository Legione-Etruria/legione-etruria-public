import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-lines',
    templateUrl: './lines.component.html',
    styleUrls: ['./lines.component.scss'],
    standalone: false
})
export class LinesComponent {
  @Input() type: 'middle' | 'end' | 'start' = 'middle';
}
