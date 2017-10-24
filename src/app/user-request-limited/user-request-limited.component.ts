import { Component, OnInit } from '@angular/core';
import { Inventory } from '../interfaces/inventory.model';
import { Change } from '../interfaces/change.model';
import { setCurrency } from '../helpers/helpers.component';

@Component({
  selector: 'app-user-request-limited',
  templateUrl: './user-request-limited.component.html'
})
export class UserRequestLimitedComponent {
  private inventory: Inventory;

  private wallet = {};
  private change: Change[];
  private askedSumAndCurrency: string;
  private currencyName: string;
  private amount: number;
  private afterSubmit: boolean = false;

  constructor() {
    this.inventory = new Inventory();
    this.wallet = {1: 23, 2: 11, 5: 200, 10: 99, 20: 0, 50: 24, 100: 11};
    // 100 = 11; 50 = 24; 20 = 0; 10 = 99; 5 = 200; 2 = 11; 1 = 23
  }

  // convert input value to number
  amountToNumber(am: HTMLInputElement): number {
    this.amount = parseInt(am.value);
    return this.amount;
  }

  calculateWalletValue(): number {
    let walletValue = 0;
    for (var key in this.wallet) {
      walletValue += parseInt(key) * this.wallet[key];
    }
    return walletValue;
  }

  // longer version of getBiggestDenom
  // getBiggestDenom(): number {
  //   let denomsArray = [];
  //
  //   for (var key in this.wallet) {
  //     denomsArray.push(parseInt(key));
  //     console.log('denomsArray', denomsArray);
  //   }
  //   let biggestDenom = denomsArray[0];
  //
  //   for(let i=0; i<denomsArray.length; i++) {
  //     if(denomsArray[i] > biggestDenom) {
  //       biggestDenom = denomsArray[i];
  //     }
  //   }
  //   return biggestDenom;
  // }

  //efficient version of getBiggestDenom
  // gets biggest denomination available in inventory - with quantity bigger than 0
  getBiggestAvailableDenom(value: number): number {
    let max = -1;
    for (var key in this.wallet) {
      let denom = parseInt(key);
      if(denom > max && this.wallet[key] > 0 && value >= denom) {
        max = denom;
      }
    }
    return max;
  }

  getMax(): number {
    let max = -1;
    for (var key in this.wallet) {
      let denom = parseInt(key);
      if(denom > max) {
        max = denom;
      }
    }
    return max;
  }


  getChangeAmountAndValues(value):  Change[] {
    let result = {1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0};
    let denoms = Object.keys(this.wallet);
    let walletValue = this.calculateWalletValue();

    if(value > walletValue) {
      console.log('NO MORE MONEY');
      return;
    }

    while (value > 0 ) {
      let denomination = this.getBiggestAvailableDenom(value);
      if (denomination == -1) {
        console.log('not enough small change');
        return;
      }
      this.wallet[denomination] = this.wallet[denomination] - 1;
      result[denomination] = result[denomination] + 1;
      value = value - denomination;
    }

    let change: Change[] = [];
    for (var key in result) {
      if (result[key] != 0) {
        change.push(new Change(result[key], key));
      }
    }

    return change;
  }

  calculateOptimalChange(reqSum: number): Change[] {
    this.afterSubmit = true;
    this.askedSumAndCurrency = setCurrency(reqSum, this.currencyName, this.inventory.currency);
    this.change = this.getChangeAmountAndValues(reqSum);
    return this.change;
  }


}
