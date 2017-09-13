# VendingMachine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Problem 1 - solved in user-request-unlimited component >>>>
Implement the logic for a vending machine that will return the optimal change for a given number of pence.
This should be presented either a standalone function or class method.

Assume an unlimited supply of coins.
This method should return the least number of coins possible
The following denominations of coin are to be used
One pound = 100p; Fifty pence = 50p; Twenty pence = 20p; Ten pence = 10p; Five pence = 5p; Two pence = 2p; One penny = 1p

## Problem 2 - solved in user-request-limited component >>>>
Implement a function or method to get the change for a given number of pence based on a limited supply of coins.
This should be presented either as a standalone function or class method.
The available coins should be stored by a method of your choice, with the following starting quantities:

100 = 11; 50 = 24; 20 = 0; 10 = 99; 5 = 200; 2 = 11; 1 = 23

This function or method should return the least number of coins possible as long as they are available in the inventory
When the function or method is invoked, the number of coins left in the inventory should be reduced and the stored quantities updated appropriately
Throw an exception if there is insufficient coinage
