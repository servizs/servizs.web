import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuthActions from './store/actions/auth.actions';
import * as fromAuth from './store/reducer/index';

@Injectable()
export class AuthFacade {
  constructor(private store: Store<fromAuth.State>) {}

  signUp(formData: any) {
    this.store.dispatch(new fromAuthActions.SignUp(<any>formData));
  }
}
