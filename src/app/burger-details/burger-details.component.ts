import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BurgersService} from '../../typescript-angular-client-generated';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.scss']
})
export class BurgerDetailsComponent implements OnInit {
  burger;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private burgersService: BurgersService
  ) { }

  ngOnInit() {
    this.getBurger();
  }
  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burger = this.burgersService.burgerDetail(id)
      .subscribe(burger => this.burger = burger);
  }
  goBack(): void {
    this.location.back();
  }

}
