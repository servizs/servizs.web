import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, Observable } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
import { SignupRoute } from '../../model/auth.model';
import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from './../../auth.service';
import { SignUp } from './../../model/auth.model';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private readonly authService: AuthService) {}
  @Effect()
  viewTaskerDetails$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromAuthActions.SignUp>(fromAuthActions.AuthActionTypes.SignUp),
      switchMap(action => {
        const nextSearch$ = this.actions$.pipe(
          ofType(fromAuthActions.AuthActionTypes.SignUp),
          skip(1)
        );

        if (action.signupRoute === SignupRoute.None) {
          return this.authService
            .signupUser(action.signUp)
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signUp),
              (error: any) => this.handleAuthFailure()
            );
        } else if (action.signupRoute === SignupRoute.Google) {
          return this.authService
            .loginWithGoogle()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signUp),
              (error: any) => this.handleAuthFailure()
            );
        } else if (action.signupRoute === SignupRoute.Facebook) {
          return this.authService
            .loginWithFb()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signUp),
              (error: any) => this.handleAuthFailure()
            );
        } else if (action.signupRoute === SignupRoute.Twitter) {
          return this.authService
            .loginWithTwitter()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signUp),
              (error: any) => this.handleAuthFailure()
            );
        }
      })
    );

  private handleAuthSuccess(authResponse: any, formData: SignUp): Action {
    const data = { ...formData, uid: authResponse.user.uid };
    try {
      this.authService.createUserProfile(data);
    } catch (error) {
      return new fromAuthActions.SignUpFailed();
    }

    return new fromAuthActions.SignUpSuccess(data);
  }

  private handleAuthFailure(): Action {
    return new fromAuthActions.SignUpFailed();
  }
}
