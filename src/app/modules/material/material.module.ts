import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



const materialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]
@NgModule({

  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
