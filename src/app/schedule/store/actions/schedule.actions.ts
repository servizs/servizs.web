import { Action } from '@ngrx/store';
import { ScheduleInfo } from './../../model/schedule.model';

export enum ScheduleActionTyes {
  ScheduleAService = '[BOOK] Schedule a service'
}

export class ScheduleAService implements Action {
  readonly type = ScheduleActionTyes.ScheduleAService;
  constructor(public scheduleInfo: ScheduleInfo) {}
}

export type ScheduleActions = ScheduleAService;
