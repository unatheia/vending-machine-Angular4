import { Component, Input } from '@angular/core';
import { Inventory } from './inventory.model';
import { Change } from './change.model';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html'
})
export class UserRequestComponent {

  private inventory: Inventory;
  private change: Change[];
  private askedSumAndCurrency: string;
  private currencyName: string;
  private amount: number;
  private afterSubmit: boolean = false;

  constructor() {
    this.inventory = new Inventory();
    this.inventory.denominations = [1, 2, 5, 10, 20, 50, 100];
    this.inventory.currency = 'cent';
  }

  // convert input value to number
  amountToNumber(am: HTMLInputElement): number {
    this.amount = parseInt(am.value);
    return this.amount;
  }

  getChangeAmountAndValues(value): Change[] {
    let result: Change[] = [];
    let denoms = this.inventory.denominations;
    for(let i = denoms.length-1; i >= 0 ; i--) {
      if(value >= denoms[i]) {
        let wholeValue: number = Math.trunc(value/denoms[i]);
        if(wholeValue >= 1) {
          value = value - (wholeValue * denoms[i]); //number that remains for next iteration
          let change: Change = new Change(wholeValue, denoms[i]);
          result.push(change);
        }
      }
    }
    return result;
  }

  calculateOptimalChange(reqSum: number): Change[] {
    this.afterSubmit = true;
    this.askedSumAndCurrency = this.setCurrency(reqSum);
    this.change = this.getChangeAmountAndValues(reqSum);
    return this.change;
  }

  // sets correct name for currency,
  setCurrency(amount: any): string {
    this.currencyName = this.inventory.currency;
    if(amount > 1) {
      this.currencyName = ' cents';
    }
    if(amount >= 100) {
      amount = amount/100;
      this.currencyName = ' pounds';
    }
    return amount + this.currencyName;
  }


}
