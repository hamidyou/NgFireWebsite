import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllIntervalConstructionQuizSubmitComponent} from './all-interval-construction-quiz-submit.component';

describe('AllIntervalConstructionQuizSubmitComponent', () => {
  let component: AllIntervalConstructionQuizSubmitComponent;
  let fixture: ComponentFixture<AllIntervalConstructionQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllIntervalConstructionQuizSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIntervalConstructionQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
