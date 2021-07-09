import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {CoreModule} from './core/core.module';
import {CarsModule} from './features/cars/cars.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimpsonModule} from './features/simpson/simpson.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CarsModule,
    SimpsonModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
