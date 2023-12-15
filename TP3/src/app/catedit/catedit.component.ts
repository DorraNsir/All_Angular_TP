import { Component } from '@angular/core';
import { Input, OnInit} from '@angular/core';
import {Cat} from '../cat';
import {CATS} from "../mock-cats";
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-catedit',
  template: `
  
    <div class="card" style="background-color: whitesmoke;">
  <div class="card-body">
  <p><strong>ID :</strong><input type="text" value="{{cat.id}}"> &nbsp;
  <strong>Name :</strong> <input type="text" value="{{cat.name}}">&nbsp;
  <strong>Breed :</strong> <input type="text" value="{{cat.breed}}">&nbsp;
  <strong>Country :</strong> <input type="text" value="{{cat.country}}"></p>
</div>
</div>`,
  styles: [
  ]
})
export class CateditComponent {
  constructor(private route: ActivatedRoute) {}
  cats = CATS;
  @Input() cat!: Cat;
  ngOnInit() {
    const idFromRoute = +this.route.snapshot.paramMap.get('id')!;
    }
  updateCat() {
    const index = _.findIndex(this.cats, (c: Cat) => c.id === this.cat.id);
    if (index !== -1) {
      this.cats[index] = { ...this.cat }; 
      console.log('Cat updated:', this.cat);
    }
  }
}
