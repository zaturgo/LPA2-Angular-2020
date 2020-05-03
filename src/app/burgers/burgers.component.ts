import { Component, OnInit } from '@angular/core';
import { Burger } from '../burger';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {
  burger: Burger = {
    id: 1,
    name: 'BigMac',
    price: 12,
    image: 'image'
  };

  constructor() { }

  ngOnInit() {
  }

}
