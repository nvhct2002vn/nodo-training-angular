import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NhaXuatBanService {

    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly apiService: ApiService,
                private toastrService: ToastrService) {
    }

    getAllNhaXuatBan() {
        return this.apiService.getAllNhaXuatBan();
    }

    createNhaXuatBan(data: any) {
        return this.apiService.createNhaXuatBan(data)
            .subscribe((data) => {
                this.toastrService.success('Thêm thành công');
                this.isCloseDialog.next(true);
                console.log(data);
            }, error => {
                console.log(error);
                this.toastrService.error('Thêm thất bại!');
            });
    }

    updateNhaXuatBan(id: number, data: any) {
        return this.apiService.updateNhaXuatBan(id, data)
            .subscribe((data) => {
                console.log(data);
                this.toastrService.success('Sửa thành công');
                this.isCloseDialog.next(true);
            }, error => {
                console.log(error);
                this.toastrService.error('Sửa thất bại!');
            });
    }

    deleteNhaXuatBan(id: number) {
        return this.apiService.deleteNhaXuatBan(id).subscribe(_ => {
            this.toastrService.success('Xoá thành công!');
            this.isCloseDialog.next(true);
            this.getAllNhaXuatBan();
        }, error => {
            console.log(error);
            this.toastrService.error('Xoá thất bại!');
        });
    }
}
