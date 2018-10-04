import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDetailsContainerComponent } from './components/smart/schedule-details-container.component';

export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleDetailsContainerComponent
    //  canActivate: [BookExistsGuard]
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
