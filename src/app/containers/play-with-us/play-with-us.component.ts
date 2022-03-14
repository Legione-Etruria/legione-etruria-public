import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-play-with-us',
  templateUrl: './play-with-us.component.html',
  styleUrls: ['./play-with-us.component.scss'],
})
export class PlayWithUsComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Gioca con noi');
  }

  ngOnInit(): void {}
}
