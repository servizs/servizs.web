import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileContainerComponent } from './components/smart/profile-container.component';
import { StripOauthComponent } from './components/smart/stripe-oauth.component';
import { TaskerDetailContainerComponent } from './components/smart/tasker-detail-container.component';

export const routes: Routes = [
  {
    path: '',
    // component: TaskerDetailContainerComponent,
    children: [
      {
        path: 'info/:userId',
        component: TaskerDetailContainerComponent
      },
      {
        path: 'profile',
        component: ProfileContainerComponent
      },
      {
        path: 'stripe-oauth',
        component: StripOauthComponent
        //  canActivate: [BookExistsGuard]
      }
    ]
  }

  //{ path: '', component: CollectionPageComponent }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class TaskerRoutingModule {}
