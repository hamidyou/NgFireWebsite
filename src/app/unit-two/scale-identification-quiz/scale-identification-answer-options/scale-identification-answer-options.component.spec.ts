import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIdentificationAnswerOptionsComponent } from './scale-identification-answer-options.component';

describe('ScaleIdentificationAnswerOptionsComponent', () => {
  let component: ScaleIdentificationAnswerOptionsComponent;
  let fixture: ComponentFixture<ScaleIdentificationAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIdentificationAnswerOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIdentificationAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
