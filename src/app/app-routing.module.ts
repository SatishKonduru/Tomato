import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseDurationComponent } from './components/course-duration/course-duration.component';
import { CourseNamesComponent } from './components/course-names/course-names.component';
import { CourseTutorComponent } from './components/course-tutor/course-tutor.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { IfComponent } from './components/if/if.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '', //localhost:4200
    redirectTo: '/home', //localhost:4200/home
    pathMatch: 'full'
  },

  {
    path: 'if', //localhost:4200/if
    component: IfComponent
  },

  {
    path: 'home', //localhost:4200/test
    component: TestComponent
  },
  {
    path:'courseNames',
    component: CourseNamesComponent
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent
  },
  // {
  //   path: 'selectedCourse/:id',
  //   component: SelectedCourseComponent
  // },
  {
    path: 'courseDetails/:id',
    component: SelectedCourseComponent,
    children: [
      {
        path:'duration',
        component: CourseDurationComponent
      },
      {
        path: 'tutor',
        component: CourseTutorComponent
      }
    ]
  },
  { path: 'faculty', loadChildren: () => import('./modules/faculty/faculty.module').then(m => m.FacultyModule) },
  {
    path: 'builtInPipes',
    component:BuiltInPipesComponent
  },
  {
    path:'customPipe',
    component: CustomPipeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
