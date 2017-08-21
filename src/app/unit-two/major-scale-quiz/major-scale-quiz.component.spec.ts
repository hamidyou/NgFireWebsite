import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorScaleQuizComponent } from './major-scale-quiz.component';

describe('MajorScaleQuizComponent', () => {
  let component: MajorScaleQuizComponent;
  let fixture: ComponentFixture<MajorScaleQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorScaleQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorScaleQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
