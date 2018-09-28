import { environment } from './../environments/environment';
import { reducers, metaReducers } from './store/reducers/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LandingPageComponent } from './home/components/landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MomentModule } from 'ngx-moment';
@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // SearchModule,
    MaterialModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
    SearchModule,
    FlexLayoutModule,
    MomentModule,

    // Store
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production
    }),

    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
