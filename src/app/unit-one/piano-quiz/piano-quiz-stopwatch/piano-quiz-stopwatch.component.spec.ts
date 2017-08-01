import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizStopwatchComponent } from './piano-quiz-stopwatch.component';

describe('PianoQuizStopwatchComponent', () => {
  let component: PianoQuizStopwatchComponent;
  let fixture: ComponentFixture<PianoQuizStopwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizStopwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizStopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
