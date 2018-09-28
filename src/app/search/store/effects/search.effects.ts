import { Service } from './../../models/service.model';
import { Observable, asyncScheduler, empty, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromServiceActions from '../actions/services.actions';
import { catchError, debounceTime, map, skip, switchMap, takeUntil } from 'rxjs/operators';
import { SearchService } from '../../search.service';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private searchService: SearchService) {}

  @Effect()
  getServices$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromServiceActions.Search>(fromServiceActions.ServicesActionsTypes.Search),
      debounceTime(debounce, scheduler),
      map(action => action.payload),
      switchMap(filter => {
        if (filter.query === '') {
          return empty();
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(fromServiceActions.ServicesActionsTypes.Search),
          skip(1)
        );
        return this.searchService.getServices(filter).pipe(
          takeUntil(nextSearch$),
          map((books: Service[]) => new fromServiceActions.SearchCompleted(books)),
          catchError(err => of(new fromServiceActions.SearchFailed(err)))
        );
      })
    );

  @Effect()
  getUserLocation$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromServiceActions.GetUserLocation>(fromServiceActions.ServicesActionsTypes.GetUserLocation),

      map(action => action.payload),
      switchMap(geoCode => {
        if (!geoCode) {
          // return of(new fromServiceActions.GetUserLocationFailed({ errorMessage: `co-ordinates are missing` }));
          return empty();
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(fromServiceActions.ServicesActionsTypes.GetUserLocation),
          skip(1)
        );

        return this.searchService.getUserLocation(geoCode).pipe(
          takeUntil(nextSearch$),
          map((location: any) => new fromServiceActions.GetUserLocationCompleted(location.join(','))),
          catchError(err => of(new fromServiceActions.SearchFailed(err)))
        );
      })
    );
}
