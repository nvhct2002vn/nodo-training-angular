import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SachService {

    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly apiService: ApiService,
                private toastrService: ToastrService) {
    }

    getAllSach() {
        return this.apiService.getAllSach();
    }

    createSach(data: any) {
        return this.apiService.createSach(data).subscribe(_ => {
            this.toastrService.success('Thêm thành công!');
            this.isCloseDialog.next(true);
        }, error => {
            console.log(error);
            this.toastrService.success('Thêm thất bại!');
        });
    }

    updateSach(id: number, data: any) {
        return this.apiService.updateSach(id, data).subscribe({
            next: (_ => {
                this.toastrService.success('Sửa thành công!');
                this.isCloseDialog.next(true);
            }), error: err => {
                this.toastrService.error('Sửa thất bại!');
                if (err.error.code == 'TotalVsTotalBorrow') {
                    this.toastrService.warning(err.error.message);
                }
            }
        });
    }

    deleteSach(id: number) {
        return this.apiService.deleteSach(id).subscribe(_ => {
            this.toastrService.success('Xoá thành công!');
            this.getAllSach();
        }, error => {
            console.log(error);
            this.toastrService.error('Xoá thất bại!');
        });
    }
}
