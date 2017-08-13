import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClefsLessonComponent } from './clefs-lesson.component';

describe('ClefsLessonComponent', () => {
  let component: ClefsLessonComponent;
  let fixture: ComponentFixture<ClefsLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClefsLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClefsLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
