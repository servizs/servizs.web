import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthFacade } from './../../auth.facade';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //  @Inject(MAT_DIALOG_DATA) public data: DialogData
  signupForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,
    private formBuilder: FormBuilder,
    private authFacade: AuthFacade
  ) {}

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

    const formValue = this.signupForm.value;
    this.authFacade.signUp(formValue);

    // TODO: pass values to facade and fire base.
  }

  /*
  onNoClick(): void {
    this.dialogRef.close();
  }*/
}
