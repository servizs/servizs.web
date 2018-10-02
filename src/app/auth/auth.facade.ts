import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuthModel from './model/auth.model';
import { SignupRoute } from './model/auth.model';
import * as fromAuthActions from './store/actions/auth.actions';
import * as fromAuth from './store/reducer/index';

@Injectable()
export class AuthFacade {
  signUp$: Observable<fromAuthModel.SignUp>;
  signIn$: Observable<fromAuthModel.SignIn>;
  error$: Observable<string>;
  constructor(private store: Store<fromAuth.State>) {
    this.signUp$ = this.store.pipe(select(fromAuth.getSignUpStatus));
    this.signIn$ = this.store.pipe(select(fromAuth.getSignInStatus));
    this.error$ = this.store.pipe(select(fromAuth.getAuthErrorStatus));
  }

  signUp(formData: any) {
    this.store.dispatch(new fromAuthActions.SignUp(formData, SignupRoute.None));
  }

  loginWithOAuth(route: SignupRoute) {
    this.store.dispatch(new fromAuthActions.SignIn(<any>{}, route));
  }

  login(formData: fromAuthModel.SignIn) {
    this.store.dispatch(new fromAuthActions.SignIn(formData, SignupRoute.None));
  }
}
