import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoQuizSubmitComponent } from './piano-quiz-submit.component';

describe('PianoQuizSubmitComponent', () => {
  let component: PianoQuizSubmitComponent;
  let fixture: ComponentFixture<PianoQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
