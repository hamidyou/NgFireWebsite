import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesIdentificationQuizComponent } from './major-key-signatures-identification-quiz.component';

describe('MajorKeySignaturesIdentificationQuizComponent', () => {
  let component: MajorKeySignaturesIdentificationQuizComponent;
  let fixture: ComponentFixture<MajorKeySignaturesIdentificationQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesIdentificationQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesIdentificationQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
