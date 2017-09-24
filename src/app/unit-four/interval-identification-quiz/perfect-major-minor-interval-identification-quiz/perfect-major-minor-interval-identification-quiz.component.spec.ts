import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PerfectMajorMinorIntervalIdentificationQuizComponent} from './perfect-major-minor-interval-identification-quiz.component';

describe('PerfectMajorMinorIntervalIdentificationQuizComponent', () => {
  let component: PerfectMajorMinorIntervalIdentificationQuizComponent;
  let fixture: ComponentFixture<PerfectMajorMinorIntervalIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerfectMajorMinorIntervalIdentificationQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectMajorMinorIntervalIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
