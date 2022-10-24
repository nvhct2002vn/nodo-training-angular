import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NhomQuyenService {
    constructor(
        private readonly apiService: ApiService,
    ) {
    }

    getAllNhomQuyen() {
        return this.apiService.getAllNhomQuyen();
    }

}
