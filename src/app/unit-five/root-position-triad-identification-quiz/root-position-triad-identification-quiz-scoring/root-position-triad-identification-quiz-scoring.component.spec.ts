import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizScoringComponent} from './root-position-triad-identification-quiz-scoring.component';

describe('RootPositionTriadIdentificationQuizScoringComponent', () => {
  let component: RootPositionTriadIdentificationQuizScoringComponent;
  let fixture: ComponentFixture<RootPositionTriadIdentificationQuizScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadIdentificationQuizScoringComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadIdentificationQuizScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
