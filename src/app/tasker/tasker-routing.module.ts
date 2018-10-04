import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmTaskerContainerComponent } from './components/smart/confirm-tasker-container.component';
import { TaskerDetailContainerComponent } from './components/tasker-detail-container.component';

export const routes: Routes = [
  {
    path: 'tasker/:userId',
    component: TaskerDetailContainerComponent
    //  canActivate: [BookExistsGuard]
  },
  {
    path: 'confirm/:userId',
    component: ConfirmTaskerContainerComponent
    //  canActivate: [BookExistsGuard]
  }

  //{ path: '', component: CollectionPageComponent }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class TaskerRoutingModule {}
