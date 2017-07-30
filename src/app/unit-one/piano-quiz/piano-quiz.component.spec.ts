import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizComponent } from './piano-quiz.component';

describe('PianoQuizComponent', () => {
  let component: PianoQuizComponent;
  let fixture: ComponentFixture<PianoQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
