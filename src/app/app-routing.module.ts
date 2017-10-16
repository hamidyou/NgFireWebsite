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
import {MinorScaleLessonComponent} from './unit-two/minor-scale-lesson/minor-scale-lesson.component';
import {MinorScalesQuizComponent} from './unit-two/minor-scales-quiz/minor-scales-quiz.component';
import {ScaleDegreesLessonComponent} from './unit-two/scale-degrees-lesson/scale-degrees-lesson.component';
import {ScaleIdentificationQuizComponent} from './unit-two/scale-identification-quiz/scale-identification-quiz.component';
import {UnitThreeComponent} from './unit-three/unit-three/unit-three.component';
import {MajorKeySignaturesLessonComponent} from './unit-three/major-key-signatures-lesson/major-key-signatures-lesson.component';
import {MinorKeySignaturesLessonComponent} from './unit-three/minor-key-signatures-lesson/minor-key-signatures-lesson.component';
import {MajorKeySignaturesIdentificationQuizComponent} from './unit-three/major-key-signatures-identification-quiz/major-key-signatures-identification-quiz.component';
import {MajorKeySignaturesConstructionQuizComponent} from './unit-three/major-key-signatures-construction-quiz/major-key-signatures-construction-quiz.component';
import {MinorKeySignaturesIdentificationQuizComponent} from './unit-three/minor-key-signatures-identification-quiz/minor-key-signatures-identification-quiz.component';
import {MinorKeySignaturesConstructionQuizComponent} from './unit-three/minor-key-signatures-construction-quiz/minor-key-signatures-construction-quiz.component';
import {UnitFourComponent} from './unit-four/unit-four/unit-four.component';
import {IntervalLessonOneComponent} from './unit-four/interval-lesson-one/interval-lesson-one.component';
import {IntervalLessonTwoComponent} from './unit-four/interval-lesson-two/interval-lesson-two.component';
import {IntervalLessonThreeComponent} from './unit-four/interval-lesson-three/interval-lesson-three.component';
import {PerfectMajorIntervalIdentificationQuizComponent} from './unit-four/interval-identification-quiz/perfect-major-interval-identification-quiz/perfect-major-interval-identification-quiz.component';
import {PerfectMajorMinorIntervalIdentificationQuizComponent} from './unit-four/interval-identification-quiz/perfect-major-minor-interval-identification-quiz/perfect-major-minor-interval-identification-quiz.component';
import {AllIntervalIdentificationQuizComponent} from './unit-four/interval-identification-quiz/all-interval-identification-quiz/all-interval-identification-quiz.component';

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
    path: 'unit-two/minor-scale-lesson',
    component: MinorScaleLessonComponent
  },
  {
    path: 'unit-two/major-scale-construction-quiz',
    component: MajorScaleQuizComponent
  },
  {
    path: 'unit-two/minor-scales-construction-quiz',
    component: MinorScalesQuizComponent
  },
  {
    path: 'unit-two/scale-degrees-lesson',
    component: ScaleDegreesLessonComponent
  },
  {
    path: 'unit-two/scale-identification-quiz',
    component: ScaleIdentificationQuizComponent
  },
  {
    path: 'unit-three',
    component: UnitThreeComponent
  },
  {
    path: 'unit-three/major-key-signatures-lesson',
    component: MajorKeySignaturesLessonComponent
  },
  {
    path: 'unit-three/minor-key-signatures-lesson',
    component: MinorKeySignaturesLessonComponent
  },
  {
    path: 'unit-three/major-key-signatures-identification-quiz',
    component: MajorKeySignaturesIdentificationQuizComponent
  },
  {
    path: 'unit-three/major-key-signatures-construction-quiz',
    component: MajorKeySignaturesConstructionQuizComponent
  },
  {
    path: 'unit-three/minor-key-signatures-identification-quiz',
    component: MinorKeySignaturesIdentificationQuizComponent
  },
  {
    path: 'unit-three/minor-key-signatures-construction-quiz',
    component: MinorKeySignaturesConstructionQuizComponent
  },
  {
    path: 'unit-four',
    component: UnitFourComponent
  },
  {
    path: 'unit-four/interval-lesson-one',
    component: IntervalLessonOneComponent
  },
  {
    path: 'unit-four/interval-lesson-two',
    component: IntervalLessonTwoComponent
  },
  {
    path: 'unit-four/interval-lesson-three',
    component: IntervalLessonThreeComponent
  },
  {
    path: 'unit-four/perfect-major-interval-identification-quiz',
    component: PerfectMajorIntervalIdentificationQuizComponent
  },
  {
    path: 'unit-four/perfect-major-minor-interval-identification-quiz',
    component: PerfectMajorMinorIntervalIdentificationQuizComponent
  },
  {
    path: 'unit-four/all-interval-identification-quiz',
    component: AllIntervalIdentificationQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
