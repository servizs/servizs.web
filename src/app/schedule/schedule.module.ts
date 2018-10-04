import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { ScheduleConfirmComponent } from './components/pure/schedule-confirm.component';
import { ScheduleDetailsComponent } from './components/pure/schedule-details.component';
import { ScheduleConfirmContainerComponent } from './components/smart/schedule-confirm-container.component';
import { ScheduleDetailsContainerComponent } from './components/smart/schedule-details-container.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleFacade } from './schedule.facade';
import { ScheduleService } from './schedule.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ScheduleRoutingModule,
    StoreModule.forFeature('schedule', {})
  ],
  declarations: [
    ScheduleDetailsContainerComponent,
    ScheduleDetailsComponent,
    ScheduleConfirmContainerComponent,
    ScheduleConfirmComponent
  ],
  providers: [ScheduleService, ScheduleFacade]
})
export class ScheduleModule {}
