import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {BasicTemplateComponent} from './containers/basic-template/basic-template.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {AboutMeComponent} from './components/about-me/about-me.component';

import * as fromRoot from './reducers/root.reducer';
import {RouterEffects} from "./effects/router.effects";
import {SharedModule} from "./shared/shared.module";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [
    AppComponent,
    BasicTemplateComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(fromRoot.reducer),
    StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
    EffectsModule.run(RouterEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
