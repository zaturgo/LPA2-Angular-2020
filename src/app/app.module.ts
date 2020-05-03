import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiModule} from '../typescript-angular-client-generated';
import {HttpClientModule} from '@angular/common/http';
import { BurgersComponent } from './burgers/burgers.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
