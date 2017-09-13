import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorKeySignaturesConstructionQuizComponent } from './major-key-signatures-construction-quiz.component';

describe('MajorKeySignaturesConstructionQuizComponent', () => {
  let component: MajorKeySignaturesConstructionQuizComponent;
  let fixture: ComponentFixture<MajorKeySignaturesConstructionQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorKeySignaturesConstructionQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorKeySignaturesConstructionQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
