import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFacade } from './auth.facade';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/pure/login.component';
import { SignupComponent } from './components/pure/signup.component';
import { LoginContainerComponent } from './components/smart/login-container.component';
import { SignupContainerComponent } from './components/smart/signup-container.component';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/reducer/index';
import { SignOutContainerComponent } from './components/smart/sign-out-container.component';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthFacade, AuthService],
  declarations: [
    LoginContainerComponent,
    SignupContainerComponent,
    SignupComponent,
    LoginComponent,
    SignOutContainerComponent
  ],
  exports: [SignupContainerComponent, LoginContainerComponent, SignOutContainerComponent],
  entryComponents: [SignupComponent, LoginComponent, SignOutContainerComponent]
})
export class AuthModule {}
