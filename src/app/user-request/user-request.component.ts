import { Component } from '@angular/core';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent {

  public inventory: Inventory;
  private afterSubmit: boolean = false;

  constructor() {
    this.inventory = new Inventory();
    this.inventory.denominations  = [1, 2, 5, 10, 20, 50, 100];
    this.inventory.currency = 'cent';
  }

  calculateOptimalChange(input: number) :number  {
    this.afterSubmit = true;

    let change = this.inventory.centsToPound(input);
    console.log('this is the input',  this.inventory);
    return change;
  }

}
