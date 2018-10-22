import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MomentModule } from 'ngx-moment';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components/app.component';
import { CoreModule } from './core/core.module';
import { LandingPageComponent } from './home/components/landing-page.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { PaymentModule } from './payment/payment.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';
import { metaReducers, reducers } from './store/reducers/index';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // SearchModule,
    MaterialModule,
    CoreModule,
    HomeModule,

    SearchModule,
    FlexLayoutModule,
    MomentModule,
    HttpClientModule,
    SharedModule,

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

    EffectsModule.forRoot([]),

    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'), // TODO.

    ScheduleModule,
    AngularFireAuthModule,
    AppRoutingModule,

    PaymentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
