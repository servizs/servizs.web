import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <mat-sidenav-container fullscreen>
      <ng-content></ng-content>
  </mat-sidenav-container>`,
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
