import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {PianoLessonComponent} from './unit-one/piano-lesson/piano-lesson.component';
import {PianoQuizComponent} from './unit-one/piano-quiz/piano-quiz.component';
import {UnitOneComponent} from './unit-one/unit-one.component';
import {UserProgressComponent} from './user-progress/user-progress.component';
import {ClefsLessonComponent} from './unit-one/clefs-lesson/clefs-lesson.component';
import {NoteQuizComponent} from './unit-one/note-quiz/note-quiz.component';
import {AccidentalsLessonComponent} from './unit-one/accidentals-lesson/accidentals-lesson.component';
import {UnitTwoComponent} from './unit-two/unit-two/unit-two.component';
import {MajorScaleLessonComponent} from './unit-two/major-scale-lesson/major-scale-lesson.component';
import {MajorScaleQuizComponent} from './unit-two/major-scale-quiz/major-scale-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'user-progress',
    component: UserProgressComponent
  },
  {
    path: 'unit-one',
    component: UnitOneComponent
  },
  {
    path: 'unit-one/piano-lesson',
    component: PianoLessonComponent
  },
  {
    path: 'unit-one/piano-quiz',
    component: PianoQuizComponent
  },
  {
    path: 'unit-one/clefs-lesson',
    component: ClefsLessonComponent
  },
  {
    path: 'unit-one/note-quiz',
    component: NoteQuizComponent
  },
  {
    path: 'unit-one/accidentals-lesson',
    component: AccidentalsLessonComponent
  },
  {
    path: 'unit-two',
    component: UnitTwoComponent
  },
  {
    path: 'unit-two/major-scale-lesson',
    component: MajorScaleLessonComponent
  },
  {
    path: 'unit-two/major-scale-construction-quiz',
    component: MajorScaleQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
