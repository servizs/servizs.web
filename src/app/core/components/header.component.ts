import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <button mat-icon-button (click)="openMenu.emit()">
      <mat-icon>menu</mat-icon>
    </button>
    <a [routerLink]="['/auth/login']">Login</a>
    <app-signup-container></app-signup-container>
    <ng-content></ng-content>
  </mat-toolbar>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
