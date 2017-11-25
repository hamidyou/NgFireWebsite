import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizQuestionDisplayComponent} from './root-position-triad-identification-quiz-question-display.component';

describe('RootPositionTriadIdentificationQuizQuestionDisplayComponent', () => {
  let component: RootPositionTriadIdentificationQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<RootPositionTriadIdentificationQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadIdentificationQuizQuestionDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadIdentificationQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
