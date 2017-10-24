import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRequestUnlimitedComponent } from './user-request-unlimited/user-request-unlimited.component';
import { UserRequestLimitedComponent } from './user-request-limited/user-request-limited.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRequestUnlimitedComponent,
    UserRequestLimitedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
