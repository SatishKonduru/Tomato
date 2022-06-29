import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseNamesComponent } from './components/course-names/course-names.component';
import { IfComponent } from './components/if/if.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
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
