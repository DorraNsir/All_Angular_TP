import { Component } from '@angular/core';
import {CATS} from "../mock-cats";
import {Cat} from '../cat';
import * as _ from 'lodash';




@Component({
  selector: 'app-cats',
  templateUrl: './cats.componets.html',
  styleUrls: ['./cats-style.css']
})
export class CatsComponent {
  cats = CATS;
  showDetails!: boolean;
  selectedCat!: Cat;
  // getCatById(id:number|undefined) {
  //   let index = _.findIndex(this.cats, (c: Cat) => {
  //   return c.id === id
  //   });
  //   this.selectedCat = this.cats[index];
  //   console.log(this.selectedCat);
  //   }

  }



