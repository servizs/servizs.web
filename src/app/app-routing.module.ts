import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/components/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*{
    path: 'tasker',
    loadChildren: './tasker/tasker.module#TaskerModule'
    // canActivate: [AuthGuard],
  },*/
  /* {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
    // canActivate: [AuthGuard],
  },*/
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
