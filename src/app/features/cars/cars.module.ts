import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsPageComponent} from './containers/cars-page/cars-page.component';
import {SelectedCarPageComponent} from './containers/selected-car-page/selected-car-page.component';
import {CarPreviewComponent} from './components/car-preview/car-preview.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import {CarsService} from './services/cars.service';
import {CarResolver} from './services/car.resolver';
import {FiglioloComponent} from './components/figliolo/figliolo.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [
    CarsPageComponent,
    SelectedCarPageComponent,
    CarPreviewComponent,
    CarDetailComponent,
    FiglioloComponent
  ],
  providers: [
    CarsService,
    CarResolver
  ]
})
export class CarsModule { }
