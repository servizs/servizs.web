import { Service, SearchError, ServiceFilter } from './../../models/service.model';
import { Action } from '@ngrx/store';

export enum ServicesActionsTypes {
  Search = '[SERVICES] Search',
  SearchCompleted = '[SERVICES] Search Completed',
  SearchFailed = '[SERVICES] Search Failed'
}

export class Search implements Action {
  readonly type = ServicesActionsTypes.Search;
  constructor(public payload: ServiceFilter) {}
}

export class SearchCompleted implements Action {
  readonly type = ServicesActionsTypes.SearchCompleted;
  constructor(public payload: Service[]) {}
}

export class SearchFailed implements Action {
  readonly type = ServicesActionsTypes.SearchFailed;
  constructor(public payload: SearchError) {}
}

export type ServiceActions = Search | SearchCompleted | SearchFailed;
