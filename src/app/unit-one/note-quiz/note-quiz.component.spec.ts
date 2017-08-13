import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteQuizComponent } from './note-quiz.component';

describe('NoteQuizComponent', () => {
  let component: NoteQuizComponent;
  let fixture: ComponentFixture<NoteQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
