import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntervalConstructionQuizComponent} from './interval-construction-quiz.component';

describe('IntervalConstructionQuizComponent', () => {
  let component: IntervalConstructionQuizComponent;
  let fixture: ComponentFixture<IntervalConstructionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalConstructionQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalConstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
