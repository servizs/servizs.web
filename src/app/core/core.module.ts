import { AppComponent } from './components/app.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent } from './components/header.component';
import { NotFoundPageComponent } from './components/not-found-page.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NotFoundPageComponent,
    AppComponent
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    NotFoundPageComponent,
    RouterModule,
    AppComponent
  ]
})
export class CoreModule {}
