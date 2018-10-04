import { Action } from '@ngrx/store';
import { ScheduleInfo } from './../../model/schedule.model';

export enum ScheduleActionTyes {
  ScheduleAService = '[SCHEDULE] Schedule A Service',
  ReviewAndConfirmTheSchedule = '[SCHEDULE] Review And Confirm The Schedule'
}

export class ScheduleAService implements Action {
  readonly type = ScheduleActionTyes.ScheduleAService;
  constructor(public scheduleInfo: ScheduleInfo) {}
}
export class ReviewAndConfirmTheSchedule implements Action {
  readonly type = ScheduleActionTyes.ReviewAndConfirmTheSchedule;
  constructor(public scheduleInfo: ScheduleInfo) {}
}

export type ScheduleActions = ScheduleAService | ReviewAndConfirmTheSchedule;
