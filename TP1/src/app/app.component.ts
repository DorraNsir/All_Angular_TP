 import { Component } from '@angular/core';

 @Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
 

}

//************EX4******************/
// import { AfterViewInit, Component, ViewChild ,ElementRef} from '@angular/core';
//  @Component({
//  selector: 'app-root',
// templateUrl: './app.component.html',
// styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit {
// upperCase:string='';
// lowerCase:string='';
// @ViewChild('input',{static:false}) inputBox!:ElementRef<HTMLInputElement>;
// textInput(event:Event){
//   const inputValue=(event.target as HTMLInputElement).value;
//   this.upperCase=inputValue.toUpperCase();
//   this.lowerCase=inputValue.toLowerCase();
// }
// ngAfterViewInit(){
//   this.inputBox.nativeElement.focus();
// }
// }
/*************ex3************ */
// import { Component } from '@angular/core';
// import {Car} from'./car';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   fg="#7FFFD4";
//   bg="#FF8C00";
// }
/*
************************ex2****************
import { Component } from '@angular/core';
import {Car} from'./car';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars=[new Car('car1',2002,'bmw','m3','https://en.wikipedia.org/wiki/BMW_M3'),
  new Car('car2',2017,'acura','nsx','https://en.wikipedia.org/wiki/Honda_NSX'),
  new Car('car3',2016,'chevy','camaro','https://en.wikipedia.org/wiki/Chevrolet_Camaro'),
];
showCar(car:Car){
  const desc = car.make;
  if(window.confirm('Click "ok" to be redirected to '+ car.article)){
    window.location.href=car.article;
  }
}
}*/

/*
***********************ex1***********************
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to app!';
  getReversed(str:string){
    let reversed='';
    for(let i=str.length-1;i>=0;i--){
      reversed+=str.substring(i,i+1);
    }
    return reversed;
  }
}
*/


