import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorIntervalIdentificationQuizComponent} from './perfect-major-interval-identification-quiz.component';

describe('PerfectMajorIntervalIdentificationQuizComponent', () => {
  let component: PerfectMajorIntervalIdentificationQuizComponent;
  let fixture: ComponentFixture<PerfectMajorIntervalIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorIntervalIdentificationQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorIntervalIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
