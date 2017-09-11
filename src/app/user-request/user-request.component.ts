import { Component, Input } from '@angular/core';
import { Inventory } from './inventory.model';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent {

  private inventory: Inventory;
  private askedSumAndCurrency: string;
  private totalCoinsReturned: number;
  private specificCoinsReturned: number;
  private currencyDenomination: number;
  private currencyName: string;

  private afterSubmit: boolean = false;

  constructor() {
    this.inventory = new Inventory();
    this.inventory.denominations = [1, 2, 5, 10, 20, 50, 100];
    this.inventory.currency = 'cent';
  }

  //sets correct name for currency,
  setCurrency(amount: any): string {
    this.currencyName = this.inventory.currency;
    if(amount > 1) {
      this.currencyName = 'cents';
      console.log('currency must be set to cents ', this.currencyName);
    }
    // amount is in pence, split by 100 to get pounds
    if(amount >= 100) {
      amount = amount/100;
      this.currencyName = 'pounds';
      console.log('currency must be set to pounds ', this.currencyName);

    }
    return amount + '' + this.currencyName;
  }

  //split by 10 and if bigger than 1, split by 10, if bigger than 1,


  getlength(number: number): number {
    return Math.trunc(number.toString().length); // 45565 = 5
  }



  calculateOptimalChange(reqSum: HTMLInputElement): any  {
    this.afterSubmit = true;

    //implement logic for giving change
    let denoms = this.inventory.denominations;



    //convert currency
    if(reqSum) {
      this.askedSumAndCurrency = this.setCurrency(reqSum.value);
      console.log('converted currency', this.askedSumAndCurrency);
      return this.askedSumAndCurrency;
    }

  }

}
