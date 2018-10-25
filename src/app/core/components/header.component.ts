import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../auth/auth.facade';
import { AuthGuard } from '../../auth/auth-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="primary">
    <button mat-icon-button (click)="openMenu.emit()">
      <mat-icon>menu</mat-icon>
    </button>
    <app-login-container [hidden]="isAuthenticated$ | async"></app-login-container>
    <app-signup-container [hidden]="isAuthenticated$ | async"></app-signup-container>
    <app-sign-out-container [hidden]="!(isAuthenticated$ | async)"></app-sign-out-container>
    <ng-content></ng-content>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isAuthenticated$: Observable<any>;
  constructor(private readonly authFacade: AuthFacade) {
    this.isAuthenticated$ = this.authFacade.loginStatus$;
  }

  ngOnInit() {}
}
