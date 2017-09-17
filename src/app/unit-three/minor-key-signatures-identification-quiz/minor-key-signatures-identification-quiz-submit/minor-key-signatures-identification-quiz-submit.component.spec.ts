import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizSubmitComponent } from './minor-key-signatures-identification-quiz-submit.component';

describe('MinorKeySignaturesIdentificationQuizSubmitComponent', () => {
  let component: MinorKeySignaturesIdentificationQuizSubmitComponent;
  let fixture: ComponentFixture<MinorKeySignaturesIdentificationQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesIdentificationQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesIdentificationQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
