import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsContainerComponent } from './../stripe/components/smart/payment-details-container.component';
import { ScheduleConfirmContainerComponent } from './components/smart/schedule-confirm-container.component';
import { ScheduleDetailsContainerComponent } from './components/smart/schedule-details-container.component';

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleDetailsContainerComponent,
    children: []
    //  canActivate: [BookExistsGuard]
  },
  {
    path: 'confirm',
    component: ScheduleConfirmContainerComponent
  },
  {
    path: 'payment-details',
    component: PaymentDetailsContainerComponent
  }
  /* {
    path: 'confirm/:userId',
    component: ConfirmTaskerContainerComponent
    //  canActivate: [BookExistsGuard]
  }
*/
  //{ path: '', component: CollectionPageComponent }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class ScheduleRoutingModule {}
