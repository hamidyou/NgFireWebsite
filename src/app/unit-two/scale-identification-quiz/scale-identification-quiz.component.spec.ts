import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIdentificationQuizComponent } from './scale-identification-quiz.component';

describe('ScaleIdentificationQuizComponent', () => {
  let component: ScaleIdentificationQuizComponent;
  let fixture: ComponentFixture<ScaleIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIdentificationQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
