import { SignIn, SignUp } from '../../model/auth.model';
import * as fromAuthActions from '../actions/auth.actions';

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
        signUp: null
      };
    }

    case fromAuthActions.AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        error: null
      };
    }

    case fromAuthActions.AuthActionTypes.SignInFailed: {
      return {
        ...state,
        error: null
      };
    }

    case fromAuthActions.AuthActionTypes.SignUp: {
      return {
        ...state,
        error: null,
        signIn: null,
        signUp: action.signUp
      };
    }

    case fromAuthActions.AuthActionTypes.SignUpSuccess: {
      return {
        ...state,
        signIn: null,
        error: null
      };
    }

    case fromAuthActions.AuthActionTypes.SignUpFailed: {
      return {
        ...state,
        error: null
      };
    }

    default: {
      return state;
    }
  }
}

// export const getTaskerDetails = (state: State) => state.taskerDetails;
