import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import * as fromAuthModel from '../../model/auth.model';
import { SignupComponent } from '../pure/signup.component';
import { AuthFacade } from './../../auth.facade';
import { skip, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.scss']
})
export class SignupContainerComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(public dialog: MatDialog, private authFacade: AuthFacade, private router: Router) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {});

    dialogRef.componentInstance.signUp.pipe(takeUntil(this.unsubscribe$)).subscribe(this.signUp.bind(this));
    dialogRef.componentInstance.signUpWithOAuth
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(this.signUpWithOAuth.bind(this));

    this.authFacade.loginStatus$
      .pipe(
        skip(1),
        takeUntil(this.unsubscribe$),
        filter(response => response)
      )
      .subscribe(_ => {
        dialogRef.close();
        this.router.navigate(['/dashboard']);
      });
    this.authFacade.error$
      .pipe(
        skip(1),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(error => (dialogRef.componentInstance.error = error));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  signUpWithOAuth(route: fromAuthModel.SignupRoute) {
    this.authFacade.loginWithOAuth(route);
  }

  signUp(formData: fromAuthModel.SignUp) {
    this.authFacade.signUp(formData);
  }
}
