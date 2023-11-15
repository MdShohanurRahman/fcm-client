import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Firebase
import { environment } from "../environments/environment";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {AngularFireModule} from "@angular/fire/compat";

import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
