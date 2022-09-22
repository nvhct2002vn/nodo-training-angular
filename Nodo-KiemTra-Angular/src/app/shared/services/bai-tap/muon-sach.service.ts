import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {ToastService} from "../../../components/elements/toast/toast-service";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MuonSachService {

    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly apiService: ApiService,
                private toastrService: ToastrService
    ) {
    }

    getAllMuonSach() {
        return this.apiService.getAllMuonSach();
    }

    createMuonSach(data: any) {
        return this.apiService.createMuonSach(data).subscribe({
                next: (data => {
                    console.log(data);
                    this.toastrService.success('Thêm thành công!');
                    this.isCloseDialog.next(true);
                }), error: err => {
                    console.log(err);
                    if (err.error.code == 'Max') {
                        this.toastrService.warning(err.error.message);
                        return;
                    } else if (err.error.code == 'BeforeDate') {
                        this.toastrService.warning(err.error.message);
                        return;
                    }
                    this.toastrService.error('Thêm thất bại!');
                }
            }
        );
    }

    updateMuonSach(id: number, data: any) {
        return this.apiService.updateMuonSach(id, data).subscribe({
                next: (data => {
                    console.log(data);
                    this.toastrService.success('Sửa thành công!');
                    this.isCloseDialog.next(true);
                }), error: err => {
                    console.log(err);
                    this.toastrService.error('Sửa thất bại!');
                    if (err.error.code == 'Max') {
                        this.toastrService.warning(err.error.message);
                        return;
                    } else if (err.error.code == 'BeforeDate') {
                        this.toastrService.warning(err.error.message);
                    }
                }
            }
        );
    }

    deleteMuonSach(id: number) {
        return this.apiService.deleteMuonSach(id).subscribe({
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
