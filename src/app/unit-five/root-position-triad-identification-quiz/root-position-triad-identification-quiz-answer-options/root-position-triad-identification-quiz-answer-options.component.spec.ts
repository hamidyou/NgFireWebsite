import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizAnswerOptionsComponent} from './root-position-triad-identification-quiz-answer-options.component';

describe('RootPositionTriadIdentificationQuizAnswerOptionsComponent', () => {
  let component: RootPositionTriadIdentificationQuizAnswerOptionsComponent;
  let fixture: ComponentFixture<RootPositionTriadIdentificationQuizAnswerOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadIdentificationQuizAnswerOptionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadIdentificationQuizAnswerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
