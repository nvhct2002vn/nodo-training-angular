import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {createRequestOption} from "../util/request-util";
import {BehaviorSubject, finalize} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Constants} from "../Constants";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    response: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    list: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isReload: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private apiService: ApiService,
        private toast: ToastrService,
    ) {
    }

    searchCategory(req: any, pageable: any): void {
        const options = createRequestOption(pageable);
        this.apiService.searchCategory(req, options).subscribe(res => {
            if (res.data) {
                this.response.next(res);
            }
        });
    }

    createCategory(data: any): void {
        this.apiService.createCategory(data).subscribe(res => {
            if (res.id) {
                this.toast.success('Thêm mới danh mục thành công');
                this.isCloseDialog.next(true);
            } else {
                this.toast.error('Thêm mới danh mục thất bại');
                this.isCloseDialog.next(false);
            }
        })
    }

    updateCategory(data: any, id: number): void {
        this.apiService.updateCategory(data, id).subscribe(res => {
            if (res.code === Constants.RESPONSE_CODE.SUCCESS) {
                this.toast.success('Cập nhật danh mục thành công');
                this.isCloseDialog.next(true);
            } else {
                this.toast.error('Cập nhật danh mục thất bại');
                this.isCloseDialog.next(false);
            }
        })
    }

    deleteCategory(id: number): void {
        this.apiService.deleteCategory(id).subscribe(res => {
            if (res.code === Constants.RESPONSE_CODE.SUCCESS) {
                this.toast.success('Xóa danh mục thành công');
                this.isReload.next(true);
            } else {
                this.toast.error('Xóa danh mục thất bại');
                this.isReload.next(false);
            }
        })
    }

    getAllCategory(): void {
        this.apiService.getAllCategory().subscribe(res => {
            this.list.next(res);
        })
    }
}
