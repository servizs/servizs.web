import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as fromAuthModel from '../../model/auth.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  @Output()
  login$ = new EventEmitter<fromAuthModel.SignIn>();
  @Output()
  loginWithOAuth$ = new EventEmitter<fromAuthModel.SignupRoute>();

  @Input()
  error: string;
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required
          //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ]
    });
  }

  /*
  onNoClick(): void {
    this.dialogRef.close();
  }*/

  async login() {
    // this.loading = true;
    if (this.loginForm.invalid) {
      return false;
    }

    this.login$.emit(this.loginForm.value as fromAuthModel.SignIn);
  }

  loginWithGoogle() {
    this.loginWithOAuth$.emit(fromAuthModel.SignupRoute.Google);
  }

  loginWithFb() {
    this.loginWithOAuth$.emit(fromAuthModel.SignupRoute.Facebook);
  }
}
