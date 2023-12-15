import { Component , OnInit} from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private carservice: CarService){}
cars:Car[]=this.carservice.getCars()
test:Car | undefined=this.carservice.getCarsId('3')
}


