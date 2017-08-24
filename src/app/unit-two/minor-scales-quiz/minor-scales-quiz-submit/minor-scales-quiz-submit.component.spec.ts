import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScalesQuizSubmitComponent } from './minor-scales-quiz-submit.component';

describe('MinorScalesQuizSubmitComponent', () => {
  let component: MinorScalesQuizSubmitComponent;
  let fixture: ComponentFixture<MinorScalesQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScalesQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScalesQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
