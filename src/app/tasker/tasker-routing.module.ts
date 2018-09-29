import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskerDetailContainerComponent } from './components/tasker-detail-container.component';

export const routes: Routes = [
  {
    path: ':userId',
    component: TaskerDetailContainerComponent
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
