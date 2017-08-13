import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQuizSubmitComponent } from './note-quiz-submit.component';

describe('NoteQuizSubmitComponent', () => {
  let component: NoteQuizSubmitComponent;
  let fixture: ComponentFixture<NoteQuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
