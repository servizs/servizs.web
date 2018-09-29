import { NotFoundPageComponent } from './core/components/not-found-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /* {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
    // canActivate: [AuthGuard]
  },*/
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
