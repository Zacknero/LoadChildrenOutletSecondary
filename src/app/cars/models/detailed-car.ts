import { Car } from './car';

export interface DetailedCar extends Car {
  details: object;
}