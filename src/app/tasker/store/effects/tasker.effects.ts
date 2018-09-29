import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, Observable } from 'rxjs';
import { map, skip, switchMap, takeUntil } from 'rxjs/operators';
import * as fromTaskerActions from '../actions/tasker.actions';
import { Tasker } from './../../model/tasker.model';
import { TaskerService } from './../../tasker.service';

@Injectable()
export class TaskerEffects {
  constructor(private actions$: Actions, private readonly taskerService: TaskerService) {}

  @Effect()
  viewTaskerDetails$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromTaskerActions.ViewTaskerDetails>(fromTaskerActions.TaskerActionsTypes.ViewTaskerDetails),
      map(action => action.userId),
      switchMap(userId => {
        const nextSearch$ = this.actions$.pipe(
          ofType(fromTaskerActions.TaskerActionsTypes.ViewTaskerDetails),
          skip(1)
        );

        return this.taskerService.getTaskerDetails(userId).pipe(
          takeUntil(nextSearch$),
          map((tasker: Tasker) => new fromTaskerActions.ViewTaskerDetailsCompleted(tasker))
          //  catchError(err => of(new fromTaskerActions.ViewTaskerDetailsFailed(err)))
        );
      })
    );
}
