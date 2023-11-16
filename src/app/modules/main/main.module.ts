import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {ShareModule} from "../share/share.module";
import { HomePageContextComponent } from './components/home-page-context/home-page-context.component';
import { AboutUsContextComponent } from './components/about-us-context/about-us-context.component';
import { ContactUsContextComponent } from './components/contact-us-context/contact-us-context.component';
import { ServicesContextComponent } from './components/services-context/services-context.component';



@NgModule({
  declarations: [
    MainComponent,
    HomePageContextComponent,
    AboutUsContextComponent,
    ContactUsContextComponent,
    ServicesContextComponent


  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
