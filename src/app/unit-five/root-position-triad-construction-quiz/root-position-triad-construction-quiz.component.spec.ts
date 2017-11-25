import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RootPositionTriadConstructionQuizComponent} from './root-position-triad-construction-quiz.component';

describe('RootPositionTriadConstructionQuizComponent', () => {
  let component: RootPositionTriadConstructionQuizComponent;
  let fixture: ComponentFixture<RootPositionTriadConstructionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RootPositionTriadConstructionQuizComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPositionTriadConstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
