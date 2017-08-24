import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorScalesQuizComponent } from './minor-scales-quiz.component';

describe('MinorScalesQuizComponent', () => {
  let component: MinorScalesQuizComponent;
  let fixture: ComponentFixture<MinorScalesQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorScalesQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorScalesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
