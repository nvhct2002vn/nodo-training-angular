import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {StorageService} from "../storage.service";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userData: any;
  public user: any;
  public showLoader: boolean = false;

  constructor(private apiService: ApiService, private storageService: StorageService, private toast: ToastrService) {}

  ngOnInit() {
    if (this.storageService.isLoggedIn()){

    }
  }

  login(username: string, password: string): void {
    this.showLoader = true;
    this.apiService.login(username,password).subscribe({
      next: data => {
        console.log(data)
        this.storageService.saveUserToken(data);
        this.showLoader = false;
        this.reloadPage();
      },
      error: err => {
        // this.errorMessage = err.error.message;
        if(err?.status === 401){
          this.toast.error(err?.error?.message);
        }
        this.showLoader = false;
      }
    });
  }

  logout(): void {
      this.storageService.clearToken();
      this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
