import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { AuthService } from '../../shared/services/firebase/auth.service';
import {AuthService} from "../../shared/services/auth-jwt/auth.service";
import {StorageService} from "../../shared/services/storage.service";
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public show: boolean = false;
    public loginForm: FormGroup | any;
    public errorMessage: any;

    constructor(public authService: AuthService, private storageService: StorageService, private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['admin', [Validators.required]],
            password: ['123456', Validators.required]
        });

    }

    ngOnInit() {
        if (this.storageService.isLoggedIn()) {
            void this.router.navigate(['']);
        } else {
            void this.router.navigate(['/auth/login']);
        }
    }

    showPassword() {
        this.show = !this.show;
    }

    // Login With Google
    loginGoogle() {
        // this.authService.GoogleAuth();
    }

    // Login With Twitter
    loginTwitter(): void {
        // this.authService.signInTwitter();
    }

    // Login With Facebook
    loginFacebook() {
        // this.authService.signInFacebok();
    }

  // Simple Login
  login() {
    this.authService.login(this.loginForm.value['email'], this.loginForm.value['password']);
  }
}
