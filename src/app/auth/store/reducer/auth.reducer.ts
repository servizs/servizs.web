import { SignIn } from '../../model/auth.model';
import * as fromAuthActions from '../actions/auth.actions';
import { SignUp } from './../../model/auth.model';

export interface State {
  signIn: SignIn;
  signUp: SignUp;
  error: string;
}

const initialState: State = {
  signIn: <any>{},
  signUp: <any>{},
  error: ''
};

export function reducer(state = initialState, action: fromAuthActions.AuthActions): State {
  switch (action.type) {
    case fromAuthActions.AuthActionTypes.SignIn: {
      return {
        ...state,
        error: null,
        signIn: action.signIn,
        signUp: <any>{}
      };
    }

    case fromAuthActions.AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        error: null,
        signIn: action.signIn,
        signUp: <any>{}
      };
    }

    case fromAuthActions.AuthActionTypes.SignInFailed: {
      return {
        ...state,
        error: 'Sign in failed',
        signUp: <any>{},
        signIn: <any>{}
      };
    }

    case fromAuthActions.AuthActionTypes.SignUp: {
      return {
        ...state,
        error: null,
        signIn: <any>{},
        signUp: action.signUp
      };
    }

    case fromAuthActions.AuthActionTypes.SignUpSuccess: {
      return {
        ...state,
        signUp: action.signUp,
        error: null
      };
    }

    case fromAuthActions.AuthActionTypes.SignUpFailed: {
      return {
        ...state,
        error: 'Sign up failed',
        signUp: <any>{},
        signIn: <any>{}
      };
    }

    default: {
      return state;
    }
  }
}
