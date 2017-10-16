import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllIntervalIdentificationQuizComponent} from './all-interval-identification-quiz.component';

describe('AllIntervalIdentificationQuizComponent', () => {
  let component: AllIntervalIdentificationQuizComponent;
  let fixture: ComponentFixture<AllIntervalIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllIntervalIdentificationQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIntervalIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
