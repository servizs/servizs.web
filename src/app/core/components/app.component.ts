import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-layout>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </app-layout>`,
  styleUrls: []
})
export class AppComponent {
  title = 'app';
}
