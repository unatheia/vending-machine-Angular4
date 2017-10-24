export function setCurrency (amount: any, currencyName: string, inventoryCurrency: string ): string {

// sets correct name for currency,
  currencyName = inventoryCurrency;
  if(amount > 1) {
    currencyName = ' cents';
  }
  if(amount >= 100) {
    amount = amount/100;
    currencyName = ' pounds';
  }
  return amount + currencyName;
}
