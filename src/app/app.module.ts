import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserRequestUnlimitedComponent } from './user-request-unlimited/user-request-unlimited.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRequestUnlimitedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
