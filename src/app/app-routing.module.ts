import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule) }, { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
