import { Service, SearchError, ServiceFilter } from './../../models/service.model';
import { Action } from '@ngrx/store';

export enum ServicesActionsTypes {
  Search = '[SERVICES] Search',
  SearchCompleted = '[SERVICES] Search Completed',
  SearchFailed = '[SERVICES] Search Failed',
  GetUserLocation = '[SERVICES] Get User Location',
  GetUserLocationCompleted = '[SERVICES] User Location Retrieved',
  GetUserLocationFailed = '[SERVICES] User Location Failed'
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

export class GetUserLocation implements Action {
  readonly type = ServicesActionsTypes.GetUserLocation;
  constructor(public payload: { lat: string; lng: string }) {}
}

export class GetUserLocationCompleted implements Action {
  readonly type = ServicesActionsTypes.GetUserLocationCompleted;
  constructor(public payload: any) {}
}

export class GetUserLocationFailed implements Action {
  readonly type = ServicesActionsTypes.GetUserLocationFailed;
  constructor(public payload: any) {}
}

export type ServiceActions =
  | Search
  | SearchCompleted
  | SearchFailed
  | GetUserLocation
  | GetUserLocationCompleted
  | GetUserLocationFailed;
