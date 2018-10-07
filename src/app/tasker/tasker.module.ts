import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { ProfileComponent } from './components/pure/profile.component';
import { TaskerDetailComponent } from './components/pure/tasker-detail.component';
import { ProfileContainerComponent } from './components/smart/profile-container.component';
import { StripOauthComponent } from './components/smart/stripe-oauth.component';
import { TaskerDetailContainerComponent } from './components/smart/tasker-detail-container.component';
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
    ReactiveFormsModule,

    TaskerRoutingModule
  ],
  providers: [TaskerService, TaskerFacade],
  declarations: [
    TaskerDetailContainerComponent,
    TaskerDetailComponent,
    ProfileContainerComponent,
    ProfileComponent,
    StripOauthComponent
  ]
})
export class TaskerModule {}
