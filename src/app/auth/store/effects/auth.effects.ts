import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, Observable } from 'rxjs';
import { skip, switchMap } from 'rxjs/operators';
import { SignupRoute, SignUp } from '../../model/auth.model';
import * as fromAuthActions from '../actions/auth.actions';
import { AuthService } from './../../auth.service';
import { SignIn } from './../../model/auth.model';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private readonly authService: AuthService) {}
  @Effect()
  signUp$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromAuthActions.SignUp>(fromAuthActions.AuthActionTypes.SignUp),
      switchMap(action => {
        const nextSearch$ = this.actions$.pipe(
          ofType(fromAuthActions.AuthActionTypes.SignUp),
          skip(1)
        );

        return this.authService
          .signupUser(action.signUp)
          .then(
            (authResponse: any) => this.handleSignUpSuccess(authResponse, action.signUp),
            (error: any) => this.handleSignUpFailure()
          );
      })
    );

  @Effect()
  signIn$ = ({ debounce = 0, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<fromAuthActions.SignIn>(fromAuthActions.AuthActionTypes.SignIn),
      switchMap(action => {
        const nextSearch$ = this.actions$.pipe(
          ofType(fromAuthActions.AuthActionTypes.SignIn),
          skip(1)
        );

        if (action.signupRoute === SignupRoute.None) {
          return this.authService
            .signInUser(action.signIn)
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signIn),
              (error: any) => this.handleAuthFailure(error)
            );
        } else if (action.signupRoute === SignupRoute.Google) {
          return this.authService
            .loginWithGoogle()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signIn),
              (error: any) => this.handleAuthFailure(error)
            );
        } else if (action.signupRoute === SignupRoute.Facebook) {
          return this.authService
            .loginWithFb()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signIn),
              (error: any) => this.handleAuthFailure(error)
            );
        } else if (action.signupRoute === SignupRoute.Twitter) {
          return this.authService
            .loginWithTwitter()
            .then(
              (authResponse: any) => this.handleAuthSuccess(authResponse, action.signIn),
              (error: any) => this.handleAuthFailure(error)
            );
        }
      })
    );

  private handleSignUpSuccess(authResponse: any, formData: SignUp): Action {
    const data = { ...formData, uid: authResponse.user.uid };
    try {
      this.authService.createUserProfile(data);
    } catch (error) {
      return new fromAuthActions.SignUpFailed();
    }

    return new fromAuthActions.SignUpSuccess(data);
  }

  private handleSignUpFailure(): Action {
    return new fromAuthActions.SignUpFailed();
  }

  private handleAuthSuccess(authResponse: any, formData: SignIn): Action {
    const data = { ...formData, uid: authResponse.user.uid };
    try {
      // this.authService.createUserProfile(data);
    } catch (error) {
      return new fromAuthActions.SignInFailed();
    }

    return new fromAuthActions.SignInSuccess(data);
  }

  private handleAuthFailure(error: any): Action {
    debugger;
    return new fromAuthActions.SignInFailed();
  }
}
