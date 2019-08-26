import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import { CarsService } from './cars.service';
import { DetailedCar } from '../models/detailed-car';

@Injectable()
export class CarResolver implements Resolve<DetailedCar> {
  constructor(private carsService: CarsService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<DetailedCar> {
    return this.carsService.getCar(+route.paramMap.get('carId'));
  }
}