import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { SearchFacade } from './search.facade';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceSearchComponent } from './components/service-search.component';
import { ServiceListComponent } from './components/service-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ServiceSearchComponent, ServiceListComponent],
  providers: [SearchService, SearchFacade]
})
export class SearchModule {}
