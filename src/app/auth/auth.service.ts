import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { SignUp } from './model/auth.model';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

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
  }
}
