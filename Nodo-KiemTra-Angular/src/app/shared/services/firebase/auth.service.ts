import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public user!: firebase.User;
  public showLoader: boolean = false;

  constructor(public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public toster: ToastrService,
    private cookieService: CookieService) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        cookieService.set('user', JSON.stringify(this.userData));
        // localStorage.setItem('user', JSON.stringify(this.userData));
        // JSON.parse(localStorage.getItem('user'));
      } else {
        cookieService.set('user', null || '{}');
        // JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  ngOnInit(): void { }

  // sign in function
  SignIn(email:any, password:any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result:any) => {
        if (result.user.emailVerified !== true) {
          this.SetUserData(result.user);
          this.SendVerificationMail();
          this.showLoader = true;
        } else {
          this.showLoader = false;
          this.ngZone.run(() => {
            this.router.navigate(['/auth/login']);
          });
        }
      }).catch((error:any) => {
        this.toster.error('You have enter Wrong Email or Password.');
      })
  }
  // Sign up with email/password
  SignUp(email:any, password:any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  

  // main verification function
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u:any) => u.sendEmailVerification()).then(() => {
        this.router.navigate(['/dashboard/dashboard01']);
      })
  }
  

  // Sign in with Facebook
  signInFacebok() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Sign in with Twitter
  signInTwitter() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  ForgotPassword(passwordResetEmail:any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error:any) => {
        window.alert(error);
      });
  }

  // Authentication for Login
  AuthLogin(provider:any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result:any) => {
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard/dashboard01']);
        });
        this.SetUserData(result.user);
      }).catch((error:any) => {
        window.alert(error);
      });
  }

  // Set user
  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL || 'src/favicon.ico',
      emailVerified: user.emailVerified
    };
    userRef.delete().then(function () {})
          .catch(function (error) {});
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    return this.afAuth.signOut().then(() => {
      this.showLoader = false;
      this.cookieService.deleteAll('user', '/auth/login');
      this.router.navigate(['/auth/login']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(this.cookieService.get('user')|| '{}');
    return (user != null && user.emailVerified != false) ? true : false;
  }

}