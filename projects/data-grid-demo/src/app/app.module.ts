import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataGridModule } from '@lcu/daf-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
