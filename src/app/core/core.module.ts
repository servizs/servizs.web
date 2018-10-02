import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './../auth/auth.module';
import { MaterialModule } from './../material/material.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { LayoutComponent } from './components/layout.component';
import { NotFoundPageComponent } from './components/not-found-page.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, AuthModule],
  declarations: [LayoutComponent, HeaderComponent, NotFoundPageComponent, AppComponent],
  exports: [HeaderComponent, LayoutComponent, NotFoundPageComponent, RouterModule, AppComponent]
})
export class CoreModule {}
