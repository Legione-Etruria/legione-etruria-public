import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithUsComponent } from './play-with-us.component';

describe('PlayWithUsComponent', () => {
  let component: PlayWithUsComponent;
  let fixture: ComponentFixture<PlayWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
