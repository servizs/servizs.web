import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/components/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { LandingPageComponent } from './home/components/landing-page.component';
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
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
