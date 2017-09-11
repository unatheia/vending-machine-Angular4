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
  private numOfEachCoinsReturned: number;
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
      this.currencyName = ' cents';
      // console.log('currency must be set to cents ', this.currencyName);
    }
    // amount is in pence, split by 100 to get pounds
    if(amount >= 100) {
      amount = amount/100;
      this.currencyName = ' pounds';
      // console.log('currency must be set to pounds ', this.currencyName);

    }
    return amount + this.currencyName;
  }

  //split by 10 and if bigger than 1, split by 10, if bigger than 1,

// var n = 3.2, integr = Math.floor(n), decimal = n - integr;
  private integsValue: number;
  getIntegslength(number: number): number {
    if(number < 100) {
      return 1;
    } else if (number >= 100) {
      number = number/100;
    }
    this.integsValue = Math.trunc(number);
    return this.integsValue.toString().length; // 45565 = 5
  }

  getDecimalsValue(number: number): number {
    let fixed;
    if(number < 100) {
      return number;
    } else {
      number = number/100;
      return parseFloat((number - this.integsValue).toFixed(2)); //OMFG OMFG toFixed transforms argument into STRING!!!!
    }
  }

  getDecimalslength(number: number): number {
    return number < 10 ? 1 : 2; //YES, I AM THY MIGHTY LORD AND SAVIOUR
  }

  calculateOptimalChange(reqSum: HTMLInputElement): void    {
    let denoms = this.inventory.denominations;
    this.askedSumAndCurrency = this.setCurrency(reqSum.value);
    this.afterSubmit = true;
    //convert currency


    // implement logic for giving change
    let inputValue = parseInt(reqSum.value);
    let integsLength = this.getIntegslength(inputValue);
    let decimsLength = this.getDecimalslength(inputValue);
    let decimsValue = this.getDecimalsValue(inputValue);

    if(decimsLength === 1) {
      if (decimsValue % 2 === 0) {
        this.currencyDenomination = 2;
        this.numOfEachCoinsReturned = decimsValue/2;
      } else if (decimsValue % 5 === 0) {
        this.currencyDenomination = 5;
        this.numOfEachCoinsReturned = decimsValue/5;
      }
    }






  }

}
