import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';
import { LayoutService } from './services/layout.service';
import { ContestComponent } from './containers/contest/contest.component';
import { ContactFormComponent } from './containers/contact-form/contact-form.component';

@NgModule({
  exports: [
    LoadingModule
  ],
  providers: [
    LayoutService
  ],
  declarations: [
    ContestComponent,
    ContactFormComponent
  ]
})
export class CoreModule { }