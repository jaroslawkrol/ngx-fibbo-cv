import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    // StoreModule.provideStore(fromRoot.reducer),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
    // EffectsModule.run(CategoryEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
