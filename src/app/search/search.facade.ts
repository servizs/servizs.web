import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import * as layoutActions from '../core/store/actions/layout.actions';
import * as fromTasker from '../tasker/store/actions/tasker.actions';
import { ServiceFilter } from './models/service.model';
import * as searchActions from './store/actions/services.actions';
import * as fromServices from './store/reducers/index';

@Injectable()
export class SearchFacade {
  searchResult$: Observable<any>;
  userLocation$: Observable<any>;
  constructor(private store: Store<fromServices.State>) {
    this.searchResult$ = this.store.pipe(
      skip(1),
      select(fromServices.getSearchResult)
    );
    this.userLocation$ = this.store.pipe(
      skip(1),
      select(fromServices.getUserLocation)
    );
  }

  findServices(searchFilter: ServiceFilter) {
    this.store.dispatch(new searchActions.Search(searchFilter));

    // Enable spinner loading.
    this.store.dispatch(new layoutActions.Loading());
  }

  findUserLocation(geoCodes: any) {
    this.store.dispatch(new searchActions.GetUserLocation(geoCodes));
  }

  viewTaskerDetails(userId: string) {
    this.store.dispatch(new fromTasker.ViewTaskerDetails(userId));
  }
}
