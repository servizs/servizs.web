import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { SignIn, SignUp } from './model/auth.model';
import { HttpClient } from '@angular/common/http';
import { URL } from '../shared/config';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../shared/error-handler';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private readonly httpClient: HttpClient) {}

  async signInUser(formData: SignIn): Promise<any> {
    return await this.afAuth.auth.signInWithEmailAndPassword(formData.emailAddress, formData.password);
  }

  async signupUser(formData: SignUp): Promise<any> {
    return await this.afAuth.auth.createUserWithEmailAndPassword(formData.emailAddress, formData.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  async loginWithGoogle(): Promise<any> {
    return await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async loginWithFb(): Promise<any> {
    return await this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  async loginWithTwitter() {
    return await this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  async createUserProfile(formData: SignUp) {
    // HTTP PUT.
    const userPutlUrl = `${URL.backendApi}/user`;
    delete formData['password'];

    this.httpClient
      .put<SignUp>(userPutlUrl, JSON.stringify(formData))
      .pipe(catchError(ErrorHandler.handleHttpError))
      .subscribe();
  }

  async login(formData: SignIn) {
    // HTTP PUT.
    const userPutlUrl = `${URL.backendApi}/user`;
    delete formData['password'];

    this.httpClient
      .post<SignIn>(userPutlUrl, JSON.stringify(formData))
      .pipe(catchError(ErrorHandler.handleHttpError))
      .subscribe();
  }
}
