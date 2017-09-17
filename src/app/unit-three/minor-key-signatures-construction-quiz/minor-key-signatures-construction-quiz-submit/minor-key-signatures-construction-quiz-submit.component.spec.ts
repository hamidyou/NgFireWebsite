import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizSubmitComponent } from './minor-key-signatures-construction-quiz-submit.component';

describe('MinorKeySignaturesConstructionQuizSubmitComponent', () => {
  let component: MinorKeySignaturesConstructionQuizSubmitComponent;
  let fixture: ComponentFixture<MinorKeySignaturesConstructionQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesConstructionQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesConstructionQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
