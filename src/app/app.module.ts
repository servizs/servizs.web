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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
