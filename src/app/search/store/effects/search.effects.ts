import { Observable, asyncScheduler, empty, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromServiceActions from '../actions/services.actions';
import { catchError, debounceTime, map, skip, switchMap, takeUntil } from 'rxjs/operators';
import { SearchService } from '../../search.service';

import * as fromSearch from '../../store/reducers/search.reducer';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private searchService: SearchService) {}

  @Effect()
  getServices$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromServiceActions.Search>(fromServiceActions.ServicesActionsTypes.Search),
      debounceTime(debounce, scheduler),
      map(action => action.payload),
      switchMap(query => {
        if (query === '') {
          return empty();
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(fromServiceActions.ServicesActionsTypes.Search),
          skip(1)
        );
        return this.searchService.getServices(query).pipe(
          takeUntil(nextSearch$),
          map((books: fromSearch.Service[]) => new fromServiceActions.SearchCompleted(books)),
          catchError(err => of(new fromServiceActions.SearchFailed(err)))
        );
      })
    );
}
