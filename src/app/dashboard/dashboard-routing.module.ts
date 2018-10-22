import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from './components/smart/dashboard-container.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
