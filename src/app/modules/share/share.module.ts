import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { PackageContextComponent } from './components/package-context/package-context.component';


@NgModule({
    declarations: [
        ShareComponent,
        MainFooterComponent,
        MainHeaderComponent,
        PackageContextComponent
    ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent
  ],
    imports: [
        CommonModule,
        ShareRoutingModule
    ]
})
export class ShareModule { }
