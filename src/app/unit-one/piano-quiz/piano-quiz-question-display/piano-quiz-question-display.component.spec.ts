import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizQuestionDisplayComponent } from './piano-quiz-question-display.component';

describe('PianoQuizQuestionDisplayComponent', () => {
  let component: PianoQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<PianoQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
