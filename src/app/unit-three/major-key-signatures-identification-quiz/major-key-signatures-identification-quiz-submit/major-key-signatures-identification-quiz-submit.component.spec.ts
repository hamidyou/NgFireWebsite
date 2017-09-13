import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizSubmitComponent } from './major-key-signatures-identification-quiz-submit.component';

describe('MajorKeySignaturesIdentificationQuizSubmitComponent', () => {
  let component: MajorKeySignaturesIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<MajorKeySignaturesIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesIdentificationQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
