import { skip } from 'rxjs/operators';
import { getSearchResult, ServicesState } from './store/reducers/index';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as searchActions from './store/actions/services.actions';
import * as layoutActions from '../core/store/actions/layout.actions';
import { getServices } from './store/reducers/search.reducer';
import { Observable } from 'rxjs';
import * as fromServices from './store/reducers/index';
import { ServiceFilter } from './models/service.model';

@Injectable()
export class SearchFacade {
  searchResult$: Observable<any>;
  constructor(private store: Store<fromServices.State>) {
    this.searchResult$ = this.store.pipe(
      skip(1),
      select(getSearchResult)
    );
  }

  findServices(searchFilter: ServiceFilter) {
    this.store.dispatch(new searchActions.Search(searchFilter));

    // Enable spinner loading.
    this.store.dispatch(new layoutActions.Loading());
  }
}
