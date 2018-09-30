import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, Observable } from 'rxjs';
import { map, skip, switchMap, takeUntil } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from './../../auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private readonly authService: AuthService) {}
  @Effect()
  viewTaskerDetails$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromAuthActions.SignUp>(fromAuthActions.AuthActionTypes.SignUp),
      map(action => action.signUp),
      switchMap(signupForm => {
        const nextSearch$ = this.actions$.pipe(
          ofType(fromAuthActions.AuthActionTypes.SignUp),
          skip(1)
        );

        return this.authService.signupUser(signupForm).pipe(
          takeUntil(nextSearch$),
          map((authResponse: boolean) => new fromAuthActions.SignUpSuccess())
          //  catchError(err => of(new fromTaskerActions.ViewTaskerDetailsFailed(err)))
        );
      })
    );
}
