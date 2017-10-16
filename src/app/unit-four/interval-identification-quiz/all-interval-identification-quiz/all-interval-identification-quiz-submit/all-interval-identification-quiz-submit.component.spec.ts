import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllIntervalIdentificationQuizSubmitComponent} from './all-interval-identification-quiz-submit.component';

describe('AllIntervalIdentificationQuizSubmitComponent', () => {
  let component: AllIntervalIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<AllIntervalIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllIntervalIdentificationQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIntervalIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
