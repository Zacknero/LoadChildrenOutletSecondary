import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Car } from '../models/car';
import { DetailedCar } from '../models/detailed-car';

const MOCK_CARS: DetailedCar[] = [
  {
    id: 1,
    brand: 'Porsche',
    model: '911',
    details: {
      price: 500000
    }
  },
  {
    id: 2,
    brand: 'Ferrari',
    model: 'F50',
    details: {
      price: 800000
    }
  },
  {
    id: 3,
    brand: 'Porsche',
    model: 'Panamera',
    details: {
      price: 300000
    }
  }
];

@Injectable()
export class CarsService {

  getCars(): Observable<Car[]> {
    return of(MOCK_CARS.map(car => {
      const { id, model, brand } = car;
      return { id, model, brand }
    })).pipe(
      delay(2000)
      );
  }

  getCar(carId: number): Observable<DetailedCar> {
    return of(MOCK_CARS.find(car => car.id === carId)).pipe(
      delay(3000)
    );
  }
}