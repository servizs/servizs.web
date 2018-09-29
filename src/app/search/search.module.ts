import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from './store/effects/search.effects';
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
import { reducers } from './store/reducers';
import { SearchFilterComponent } from './components/search-filter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    SearchRoutingModule,
    StoreModule.forFeature('services', reducers),
    EffectsModule.forFeature([SearchEffects])
  ],
  declarations: [ServicePreviewComponent, ServicePreviewListComponent, SearchComponent, SearchContainerComponent, SearchFilterComponent],
  providers: [SearchService, SearchFacade, SearchEffects],
  exports: [SearchContainerComponent]
})
export class SearchModule {}
