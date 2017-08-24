import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleQuizSubmitComponent } from './major-scale-quiz-submit.component';

describe('MajorScaleQuizSubmitComponent', () => {
  let component: MajorScaleQuizSubmitComponent;
  let fixture: ComponentFixture<MajorScaleQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
