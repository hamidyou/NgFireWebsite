import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {PianoLessonComponent} from './unit-one/piano-lesson/piano-lesson.component';
import {PianoQuizComponent} from './unit-one/piano-quiz/piano-quiz.component';
import {UnitOneComponent} from './unit-one/unit-one.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
