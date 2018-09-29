import { Action } from '@ngrx/store';
import * as fromAuthModel from '../../model/auth.model';

export enum AuthActionTypes {
  SignUp = '[AUTH] SignUp',
  SignUpSuccess = '[AUTH] Sign Up Success',
  SignUpFailed = '[AUTH] SignUp Failed',
  SignIn = '[AUTH] Sign Up Success',
  SignInSuccess = '[AUTH] SignIn',
  SignInFailed = '[AUTH] Sign In Failed'
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;
  constructor(public signUp: fromAuthModel.SignUp) {}
}
export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;
}
export class SignUpFailed implements Action {
  readonly type = AuthActionTypes.SignUpFailed;
}
export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn;
  constructor(public signIn: fromAuthModel.SignIn) {}
}
export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess;
}
export class SignInFailed implements Action {
  readonly type = AuthActionTypes.SignInFailed;
}

export type AuthActions = SignUp | SignUpSuccess | SignUpFailed | SignIn | SignInSuccess | SignInFailed;
