import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthFacade } from '../../auth.facade';
import * as fromAuthModel from '../../model/auth.model';
import { LoginComponent } from './../pure/login.component';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(public dialog: MatDialog, private authFacade: AuthFacade, private router: Router) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
      //  data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log('The dialog was closed');
      this.animal = result;*/
    });

    dialogRef.componentInstance.login$.subscribe(this.login.bind(this));
    dialogRef.componentInstance.loginWithOAuth$.subscribe(this.loginWithOAuth.bind(this));

    this.authFacade.signUp$.subscribe(response => this.router.navigate['/dashboard']);
    this.authFacade.error$.subscribe(error => (dialogRef.componentInstance.error = error));
  }

  ngOnInit() {}
  loginWithOAuth(route: fromAuthModel.SignupRoute) {
    this.authFacade.loginWithOAuth(route);
  }

  login(formData: fromAuthModel.SignUp) {
    this.authFacade.login(formData);
  }
}
