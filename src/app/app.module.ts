import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, FormioModule
  ],
  providers:    [{provide: FormioAppConfig, useValue: {
    icons: 'fontawesome'
  }} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
