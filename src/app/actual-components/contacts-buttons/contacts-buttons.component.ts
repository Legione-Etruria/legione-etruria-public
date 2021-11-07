import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-button',
  templateUrl: './contacts-buttons.component.html',
  styleUrls: ['./contacts-buttons.component.scss'],
})
export class ContactsButtonsComponent implements OnInit {
  @Input() contactName!: string;
  @Input() iconClass!: string;
  @Input() contactValue!: string;
  @Input() contactRedirect: string = 'https://www.google.com/';
  constructor() {}

  ngOnInit(): void {}

  visitLink() {
    console.log(this.contactRedirect);
    if (this.contactRedirect.startsWith('mailto:')) {
      return (location.href = this.contactRedirect);
    }

    return window.open(this.contactRedirect);
  }
}