import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIdentificationQuizSubmitComponent } from './scale-identification-quiz-submit.component';

describe('ScaleIdentificationQuizSubmitComponent', () => {
  let component: ScaleIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<ScaleIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIdentificationQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
