import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TacGiaService {

    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly apiService: ApiService,
                private toastrService: ToastrService) {
    }

    getAllTacGia() {
        return this.apiService.getAllTacGia();
    }

    createTacGia(data: any) {
        return this.apiService.createTacGia(data)
            .subscribe((data) => {
                this.toastrService.success('Thêm thành công');
                this.isCloseDialog.next(true);
                console.log(data);
            });
    }

    updateTacGia(id: number, data: any) {
        return this.apiService.updateTacGia(id, data)
            .subscribe((data) => {
                this.toastrService.success('Sửa thành công');
                this.isCloseDialog.next(true);
            }, error => {
                console.log(error);
                this.toastrService.error('Sửa thất bại!');
            });
    }

    deleteTacGia(id: number) {
        return this.apiService.deleteTacGia(id).subscribe(_ => {
            this.toastrService.success('Xoá thành công!');
            this.getAllTacGia();
        }, error => {
            console.log(error);
            this.toastrService.error('Xoá thất bại!');
        });
    }
}
