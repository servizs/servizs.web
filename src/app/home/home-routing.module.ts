import { LandingPageComponent } from './components/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent }
  /*{
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard]
  },
  { path: '', component: CollectionPageComponent }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
