import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizAnswerOptionsComponent } from './piano-quiz-answer-options.component';

describe('PianoQuizAnswerOptionsComponent', () => {
  let component: PianoQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<PianoQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
