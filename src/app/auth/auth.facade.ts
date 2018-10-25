import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAuthModel from './model/auth.model';
import { SignupRoute } from './model/auth.model';
import * as fromAuthActions from './store/actions/auth.actions';
import * as fromAuth from './store/reducer/index';

@Injectable()
export class AuthFacade {
  loginStatus$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<fromAuth.State>) {
    this.loginStatus$ = this.store.pipe(select(fromAuth.getAuthStatus));
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
