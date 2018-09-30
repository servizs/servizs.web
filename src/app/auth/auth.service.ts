import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { SignUp } from './model/auth.model';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  signupUser(formData: SignUp): Observable<boolean> {
    this.afAuth.auth
      .createUserWithEmailAndPassword(formData.emailAddress, formData.password)
      .then((returnedUser: any) => {
        console.log('uid', returnedUser.user.uid); // TODO: do I need this info?
        //  this.goodLogin(returnedUser.uid);
      })
      .catch(err => {
        console.log(err.code); // auth/email-already-in-use
        console.log('Error', err);
        //this.badLogin();
      });

    return of(true);
  }
}
