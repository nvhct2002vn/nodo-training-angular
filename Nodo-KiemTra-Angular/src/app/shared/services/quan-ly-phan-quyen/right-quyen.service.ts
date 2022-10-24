import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs';
import {ApiConstant} from "../../constants/api-constant";

@Injectable({
    providedIn: 'root',
})
export class RightQuyenService {

    constructor(
        private readonly apiService: ApiService,
        private toastrService: ToastrService
    ) {
    }

    getAllRightQuyen() {
        return this.apiService.getAllRightQuyen();
    }

    getByNhomQuyenMenu(id: number) {
        return this.apiService.getByNhomQuyenMenu(id);
    }

    createRightQuyen(data: any[]) {
        return this.apiService.createRightQuyen(data).subscribe({
            next: (data: any) => {
                console.log(data);
            }, error: err => {
                this.toastrService.error('Cập nhật thất bại!');
                console.log(err);
            }
        });
    }

    deleteById(idNQ: number, idDel: any[]) {
        return this.apiService.deleteById(idNQ, idDel).subscribe({
            next: (data: any) => {
                console.log(data);
            }, error: (err: any) => {
                console.log(err);
                this.toastrService.error('Cập nhật thất bại!');
            }
        });
    }

}
