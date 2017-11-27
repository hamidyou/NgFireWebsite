import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadConstructionQuizQuestionDisplayComponent} from './root-position-triad-construction-quiz-question-display.component';

describe('RootPositionTriadConstructionQuizQuestionDisplayComponent', () => {
  let component: RootPositionTriadConstructionQuizQuestionDisplayComponent;
  let fixture: ComponentFixture<RootPositionTriadConstructionQuizQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadConstructionQuizQuestionDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadConstructionQuizQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
