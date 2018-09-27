import { SearchModule } from './../search/search.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SearchModule],
  declarations: []
})
export class HomeModule {}
