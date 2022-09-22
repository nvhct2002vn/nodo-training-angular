import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BanDocService {

    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private readonly apiService: ApiService,
        private toastrService: ToastrService,
    ) {
    }

    getAllBanDoc() {
        return this.apiService.getAllBanDoc();
    }

    createBanDoc(data: any) {
        return this.apiService.createBanDoc(data).subscribe({
                next: (data => {
                    console.log(data);
                    this.toastrService.success('Thêm thành công!');
                    this.isCloseDialog.next(true);
                }), error: err => {
                    console.log(err);
                    this.toastrService.error('Thêm thất bại!');
                }
            }
        );
    }

    updateBanDoc(id: number, data: any) {
        return this.apiService.updateBanDoc(id, data).subscribe({
                next: (data => {
                    console.log(data);
                    this.toastrService.success('Sửa thành công!');
                    this.isCloseDialog.next(true);
                }), error: err => {
                    console.log(err);
                    this.toastrService.error('Sửa thất bại!');
                }
            }
        );
    }

    deleteBanDoc(id: number) {
        return this.apiService.deleteBanDoc(id).subscribe({
            next: (_ => {
                this.toastrService.success('Xoá thành công');
                this.isCloseDialog.next(true);
            }), error: err => {
                console.log(err)
                this.toastrService.error('Xoá thất bại');
            }
        });
    }
}
