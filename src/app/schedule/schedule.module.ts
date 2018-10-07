import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { StripeModule } from './../stripe/stripe.module';
import { ScheduleConfirmComponent } from './components/pure/schedule-confirm.component';
import { ScheduleDetailsComponent } from './components/pure/schedule-details.component';
import { ScheduleConfirmContainerComponent } from './components/smart/schedule-confirm-container.component';
import { ScheduleDetailsContainerComponent } from './components/smart/schedule-details-container.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleFacade } from './schedule.facade';
import { ScheduleService } from './schedule.service';
import { reducers } from './store/reducer/index';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('schedule', reducers),
    StripeModule,
    FormsModule,
    ScheduleRoutingModule
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
