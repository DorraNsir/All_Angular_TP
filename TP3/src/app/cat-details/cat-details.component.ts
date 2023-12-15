import { Component } from '@angular/core';
import { Input, OnInit} from '@angular/core';
import {Cat} from '../cat';
import {CATS} from "../mock-cats";
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat-details',
  template: `
   <div class="card" style="background-color: whitesmoke;">
  <div class="card-body">
  <p><strong>ID :</strong> {{cat.id}}&nbsp;
  <strong>Name :</strong> {{cat.name}}&nbsp;
  <strong>Breed :</strong> {{cat.breed}}&nbsp;
  <strong>Country :</strong> {{cat.country}}</p>
</div>
</div>
`,
  styles: [
  ]
})
export class CatDetailsComponent {
  constructor(private route: ActivatedRoute) {}
  cats = CATS;
  @Input() cat!: Cat;
  ngOnInit() {
    const idFromRoute = +this.route.snapshot.paramMap.get('id')!;
    this.getCatById(idFromRoute);
    }
  getCatById(id:number|undefined) {
    let index = _.findIndex(this.cats, (c: Cat) => {
    return c.id === id
    });
    this.cat= this.cats[index];
    console.log(this.cat);
    }
}
