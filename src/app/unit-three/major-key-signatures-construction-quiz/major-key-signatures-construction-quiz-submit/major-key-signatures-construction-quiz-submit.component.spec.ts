import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizSubmitComponent } from './major-key-signatures-construction-quiz-submit.component';

describe('MajorKeySignaturesConstructionQuizSubmitComponent', () => {
  let component: MajorKeySignaturesConstructionQuizSubmitComponent;
  let fixture: ComponentFixture<MajorKeySignaturesConstructionQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesConstructionQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesConstructionQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
