import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpsonComponent} from './simpson.component';
import {RouterModule, Routes} from '@angular/router';

export const routers: Routes = [
  {
    path: 'simpson',
    component: SimpsonComponent
  },
  {
    path: 'homer',
    loadChildren: () => import('./homer/homer.module').then(m => m.HomerModule)
  }
];

@NgModule({
  declarations: [
    SimpsonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class SimpsonModule {
}
