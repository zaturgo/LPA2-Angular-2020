import { Injectable } from '@angular/core';
import { Burger } from './burger';
import { BURGERS } from './mock-burgers';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor() { }
  getBurgers(): Burger[] {
    return BURGERS;
  }
}
