import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StorageService} from "../services/storage.service";
import {Observable} from 'rxjs';
import {AuthService} from '../services/firebase/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(public authService: AuthService, public storageService: StorageService,
                public router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // Guard for user is login or not
        console.log(this.storageService.isLoggedIn())
        if (!this.storageService.isLoggedIn()) {
            void this.router.navigate(['/auth/login']);
            return false;
        } else {
            return true;
        }
    }

}
