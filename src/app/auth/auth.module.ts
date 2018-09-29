import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { AuthFacade } from './auth-facade.service';
import { AuthService } from './auth-service.service';
import { LoginComponent } from './components/pure/login.component';
import { SignupComponent } from './components/pure/signup.component';
import { LoginContainerComponent } from './components/smart/login-container.component';
import { SignupContainerComponent } from './components/smart/signup-container.component';
import { AuthEffects } from './store/effects/auth-effects.service';
import { reducers } from './store/reducer/index';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    SharedModule,
    MaterialModule
  ],
  providers: [AuthFacade, AuthService],
  declarations: [LoginContainerComponent, SignupContainerComponent, SignupComponent, LoginComponent]
})
export class AuthModule {}
