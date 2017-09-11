
export class Inventory {
  totalSum: number;
  denominations: number[];
  currency: string;

  centsToPound(amount) {
    if (amount >= 100) {
      amount = amount/100 + 'pound';
      console.log('the amount is', amount);
      return amount;
    } else {
      return amount;
    }
  }
}
