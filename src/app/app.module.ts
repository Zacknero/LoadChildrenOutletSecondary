import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from './core/core.module';
import {CarsModule} from './cars/cars.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {ProvaModule} from "./prova/prova.module";

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        CarsModule,
        ProvaModule,
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
