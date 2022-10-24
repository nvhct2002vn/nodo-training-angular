import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NhomQuyenMenuService {

    constructor(
        private readonly apiService: ApiService,
    ) {
    }

    getAllNhomQuyenMenu() {
        return this.apiService.getAllNhomQuyenMenu();
    }

}
