import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Output() loadingDone = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.onDone();
    }, 500);
  }

  onDone(): void {
    setTimeout(() => {
      this.loadingDone.emit();
    }, 2000);
  }
}
