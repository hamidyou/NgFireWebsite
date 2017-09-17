import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorKeySignaturesConstructionQuizComponent } from './minor-key-signatures-construction-quiz.component';

describe('MinorKeySignaturesConstructionQuizComponent', () => {
  let component: MinorKeySignaturesConstructionQuizComponent;
  let fixture: ComponentFixture<MinorKeySignaturesConstructionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorKeySignaturesConstructionQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorKeySignaturesConstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
