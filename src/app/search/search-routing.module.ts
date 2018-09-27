import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  /*{
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard]
  },
  { path: '', component: CollectionPageComponent }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
