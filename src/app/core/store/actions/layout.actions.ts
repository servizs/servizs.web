import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  Loading = '[LAYOUT] Loading',
  LoadingCompleted = '[LAYOUT] Loading Completed',
  LoadingFailed = '[LAYOUT] Loading Failed'
}

export class Loading implements Action {
  readonly type = LayoutActionTypes.Loading;
}

export class LoadingCompleted implements Action {
  readonly type = LayoutActionTypes.LoadingCompleted;
}

export class LoadingFailed implements Action {
  readonly type = LayoutActionTypes.LoadingFailed;
}

export type LayoutActions = Loading | LoadingCompleted | LoadingFailed;
