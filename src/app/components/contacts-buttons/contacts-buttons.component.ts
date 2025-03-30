import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'contact-button',
    templateUrl: './contacts-buttons.component.html',
    styleUrls: ['./contacts-buttons.component.scss'],
    standalone: false
})
export class ContactsButtonsComponent implements OnInit {
  @Input() contactName!: string;
  @Input() iconClass!: string;
  @Input() contactValue!: string;
  @Input() contactRedirect: string = 'https://www.google.com/';
  @Input() imagePath?: string;
  constructor() {}

  ngOnInit(): void {}

  visitLink() {
    if (this.contactRedirect.startsWith('mailto:')) {
      return (location.href = this.contactRedirect);
    }

    return window.open(this.contactRedirect);
  }
}
