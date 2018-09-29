import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material/material.module';
import { SearchContainerComponent } from './components/search-container.component';
import { SearchFilterComponent } from './components/search-filter.component';
import { SearchComponent } from './components/search.component';
import { ServicePreviewListComponent } from './components/service-preview-list.component';
import { ServicePreviewComponent } from './components/service-preview.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchFacade } from './search.facade';
import { SearchService } from './search.service';
import { SearchEffects } from './store/effects/search.effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SearchRoutingModule,
    StoreModule.forFeature('services', reducers),
    EffectsModule.forFeature([SearchEffects])
  ],
  declarations: [
    ServicePreviewComponent,
    ServicePreviewListComponent,
    SearchComponent,
    SearchContainerComponent,
    SearchFilterComponent
  ],
  providers: [SearchService, SearchFacade],
  exports: [SearchContainerComponent]
})
export class SearchModule {}
