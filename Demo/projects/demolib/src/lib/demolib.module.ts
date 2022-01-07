import { NgModule } from '@angular/core';
import { DemolibComponent } from './demolib.component';
import { DemobtnComponent } from './demobtn.component';

import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import {MatButtonModule} from '@angular/material/button';

const materialModules = [
  MatButtonModule
];

@NgModule({
  declarations: [
    DemolibComponent,
    DemobtnComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    materialModules,
  ],
  exports: [
    DemolibComponent,
    DemobtnComponent,
    materialModules
  ]
})
export class DemolibModule { }
