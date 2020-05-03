import { Component, OnInit } from '@angular/core';
import { Burger } from '../../typescript-angular-client-generated';
import { BurgersService } from '../../typescript-angular-client-generated';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {
  burgers: Burger[];

  constructor(private burgersService: BurgersService) { }

  ngOnInit() {
    this.getBurgers();
  }
  getBurgers(): void {
    this.burgersService.listBurgers()
      .subscribe(burgers => this.burgers = burgers);  }
}
