import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { DataGridModule } from '@lcu/daf-ui';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { GridService } from './services/grid.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    DataGridModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
