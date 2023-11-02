import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';


@NgModule({
  declarations: [
    MainComponent,
    MainSliderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
