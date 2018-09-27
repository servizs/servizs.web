import { SearchContainerComponent } from './components/search-container.component';
import { SearchComponent } from './components/search.component';
import { ServicePreviewListComponent } from './components/service-preview-list.component';
import { ServicePreviewComponent } from './components/service-preview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { SearchFacade } from './search.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SearchRoutingModule
  ],
  declarations: [
    ServicePreviewComponent,
    ServicePreviewListComponent,
    SearchComponent,
    SearchContainerComponent
  ],
  providers: [SearchService, SearchFacade],
  exports: [SearchContainerComponent]
})
export class SearchModule {}