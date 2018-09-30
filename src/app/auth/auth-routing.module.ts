import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './components/smart/login-container.component';
import { SignupContainerComponent } from './components/smart/signup-container.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginContainerComponent
  },
  {
    path: 'signup',
    component: SignupContainerComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
