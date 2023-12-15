
import {Injectable} from '@angular/core'
import{ Car }from './car';;



@Injectable(
    {
        providedIn:'root'
    }
)
export class CarService{
    constructor(){}
    cars: Car[] = [
        new Car('1', 2022, 'Toyota', 'Camry', 'The 2022 Toyota Camry is a popular midsize sedan.'),
        new Car('2', 2021, 'Honda', 'Civic', 'The 2021 Honda Civic is a compact car known for its reliability.'),
        new Car('3', 2023, 'Ford', 'F-150', 'The 2023 Ford F-150 is a full-size pickup truck.'),
        new Car('4', 2020, 'Tesla', 'Model 3', 'The 2020 Tesla Model 3 is an electric sedan.'),
        new Car('5', 2022, 'BMW', '3 Series', 'The 2022 BMW 3 Series is a luxury compact sedan.'),
      ]


      getCars():Car[]{
        return this.cars;
      }

      getCarsId(id:string):Car | undefined{
       // return this.cars.find((car)=>console.log(car))
        return this.cars.find((car)=>id==car.id)

      }
}