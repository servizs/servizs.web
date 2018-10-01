import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as fromAuthModel from '../../model/auth.model';
import { SignupComponent } from '../pure/signup.component';
import { AuthFacade } from './../../auth.facade';

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.scss']
})
export class SignupContainerComponent implements OnInit {
  constructor(public dialog: MatDialog, private authFacade: AuthFacade) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '400px'
      //  data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log('The dialog was closed');
      this.animal = result;*/
    });

    dialogRef.componentInstance.signUp.subscribe(this.signUp.bind(this));
    dialogRef.componentInstance.signUpWithOAuth.subscribe(this.signUpWithOAuth.bind(this));
    this.authFacade.error$.subscribe(error => (dialogRef.componentInstance.error = error));
  }

  ngOnInit() {}
  signUpWithOAuth(route: fromAuthModel.SignupRoute) {
    this.authFacade.loginWithOAuth(route);
  }

  signUp(formData: fromAuthModel.SignUp) {
    this.authFacade.signUp(formData);
  }
}
