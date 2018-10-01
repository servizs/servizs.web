import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromAuth from '../reducer/auth.reducer';

export interface AuthState {
  auth: fromAuth.State;
}

export interface State extends fromRoot.AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuth.reducer
};

export const getAuthState = createFeatureSelector<State, AuthState>('auth');

export const getSignInStatus = createSelector(getAuthState, (state: AuthState) => state.auth.signIn);
export const getSignUpStatus = createSelector(getAuthState, (state: AuthState) => state.auth.signUp);

export const getAuthErrorStatus = createSelector(getAuthState, (state: AuthState) => state.auth.error);
