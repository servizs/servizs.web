import { Action } from '@ngrx/store';

import * as fromSearch from '../../store/reducers/search.reducer';
export enum ServicesActionsTypes {
  Search = '[SERVICES] Search',
  SearchCompleted = '[SERVICES] Search Completed',
  SearchFailed = '[SERVICES] Search Failed'
}

export class Search implements Action {
  readonly type = ServicesActionsTypes.Search;
  constructor(public payload: string) {}
}

export class SearchCompleted implements Action {
  readonly type = ServicesActionsTypes.SearchCompleted;
  constructor(public payload: fromSearch.Service[]) {}
}

export class SearchFailed implements Action {
  readonly type = ServicesActionsTypes.SearchFailed;
  constructor(public payload: fromSearch.SearchError) {}
}

export type ServiceActions = Search | SearchCompleted | SearchFailed;
