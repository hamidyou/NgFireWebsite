import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadIdentificationQuizComponent} from './root-position-triad-identification-quiz.component';

describe('RootPositionTriadIdentificationQuizComponent', () => {
  let component: RootPositionTriadIdentificationQuizComponent;
  let fixture: ComponentFixture<RootPositionTriadIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadIdentificationQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
