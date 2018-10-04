import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { ConfirmTaskerComponent } from './components/pure/confirm-tasker.component';
import { ConfirmTaskerContainerComponent } from './components/smart/confirm-tasker-container.component';
import { TaskerDetailContainerComponent } from './components/tasker-detail-container.component';
import { TaskerDetailComponent } from './components/tasker-detail.component';
import { TaskerEffects } from './store/effects/tasker.effects';
import { reducers } from './store/reducer';
import { TaskerRoutingModule } from './tasker-routing.module';
import { TaskerFacade } from './tasker.facade';
import { TaskerService } from './tasker.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('tasker', reducers),
    EffectsModule.forFeature([TaskerEffects]),
    SharedModule,
    MaterialModule,
    TaskerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskerService, TaskerFacade],
  declarations: [
    TaskerDetailContainerComponent,
    TaskerDetailComponent,
    ConfirmTaskerContainerComponent,
    ConfirmTaskerComponent
  ]
})
export class TaskerModule {}
