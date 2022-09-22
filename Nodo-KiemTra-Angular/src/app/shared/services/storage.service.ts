import {Injectable} from '@angular/core';

const USER_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() {
    }

    clean(): void {
        window.sessionStorage.clear();
    }
  public saveUserToken(userToken: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userToken));
  }
  public getUserToken(): any {
    const userToken = window.sessionStorage.getItem(USER_KEY);
    if (userToken) {
      return JSON.parse(userToken);
    }
    return {};
  }
  public isLoggedIn(): boolean {
    let authToken = this.getUserToken();
      return authToken !== undefined && authToken?.access_token !== undefined;
  }

  getToken() {
    let authToken = this.getUserToken();
    return authToken !== null && authToken?.access_token !== null ? authToken?.access_token : null;
  }

  clearToken(){
    window.sessionStorage.removeItem(USER_KEY);
  }
}
