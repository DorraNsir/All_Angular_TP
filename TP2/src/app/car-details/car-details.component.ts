import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-details',
  templateUrl:'./car-details.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  id:string='';
  car:Car|undefined;
  constructor(private route:ActivatedRoute, private carservice: CarService){}
  ngOnInit(){
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.car =this.carservice.getCarsId(this.id)!;
  } 
  
}
