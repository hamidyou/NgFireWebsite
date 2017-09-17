import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesIdentificationQuizComponent } from './minor-key-signatures-identification-quiz.component';

describe('MinorKeySignaturesIdentificationQuizComponent', () => {
  let component: MinorKeySignaturesIdentificationQuizComponent;
  let fixture: ComponentFixture<MinorKeySignaturesIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesIdentificationQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
