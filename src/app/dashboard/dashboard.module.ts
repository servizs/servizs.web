import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './components/smart/dashboard-container.component';
import { DashboardComponent } from './components/pure/dashboard.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardContainerComponent, DashboardComponent]
})
export class DashboardModule {}
