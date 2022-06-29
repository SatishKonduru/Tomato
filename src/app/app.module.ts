import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { MaterialModule } from './modules/material/material.module';
import { RVariablesComponent } from './components/r-variables/r-variables.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseNamesComponent } from './components/course-names/course-names.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PBindingComponent,
    CBindingComponent,
    SBindingComponent,
    EBindingComponent,
    RVariablesComponent,
    TwoWayDataBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    ChildComponent,
    PageNotFoundComponent,
    CourseNamesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
