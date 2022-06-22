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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PBindingComponent,
    CBindingComponent,
    SBindingComponent,
    EBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
