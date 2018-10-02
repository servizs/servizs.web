import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import * as fromAuthModel from '../../model/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  //  @Inject(MAT_DIALOG_DATA) public data: DialogData
  signupForm: FormGroup;
  @Output()
  signUp = new EventEmitter<fromAuthModel.SignUp>();
  @Output()
  signUpWithOAuth = new EventEmitter<fromAuthModel.SignupRoute>();

  @Input()
  error: string;

  constructor(public dialogRef: MatDialogRef<SignupComponent>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required
          //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ],
      firstName: [
        '',
        [
          Validators.required
          /*Validators.minLength(2), 
        Validators.min(18), 
        Validators.max(65)*/
        ]
      ],
      lastName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });
  }

  async signup() {
    // this.loading = true;
    if (this.signupForm.invalid) {
      return false;
    }

    this.signUp.emit(this.signupForm.value as fromAuthModel.SignUp);
  }

  loginWithGoogle() {
    this.signUpWithOAuth.emit(fromAuthModel.SignupRoute.Google);
  }

  loginWithFb() {
    this.signUpWithOAuth.emit(fromAuthModel.SignupRoute.Facebook);
  }

  /*
  onNoClick(): void {
    this.dialogRef.close();
  }*/
}
