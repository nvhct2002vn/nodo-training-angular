import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {ToastrService} from "ngx-toastr";
import {createRequestOption} from "../util/request-util";
import {Constants} from "../Constants";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    response: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    isCloseDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isReload: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(
        private apiService: ApiService,
        private toast: ToastrService,
    ) {
    }

    searchProduct(req: any, pageable: any): void {
        req.idCategory = req.idCategory === -1 ? null : req.idCategory;
        const options = createRequestOption(pageable);
        this.apiService.searchProduct(req, options).subscribe(res => {
            if (res.data) {
                this.response.next(res);
            }
        });
    }

    createProduct(data: any): void {
        this.apiService.createProduct(data).subscribe(res => {
            if (res.id) {
                this.toast.success('Thêm mới danh mục thành công');
                this.isCloseDialog.next(true);
            } else {
                this.toast.error('Thêm mới danh mục thất bại');
                this.isCloseDialog.next(false);
            }
        })
    }

    updateProduct(data: any, id: number): void {
        this.apiService.updateProduct(data, id).subscribe(res => {
            if (res.code === Constants.RESPONSE_CODE.SUCCESS) {
                this.toast.success('Cập nhật danh mục thành công');
                this.isCloseDialog.next(true);
            } else {
                this.toast.error('Cập nhật danh mục thất bại');
                this.isCloseDialog.next(false);
            }
        })
    }

    deleteProduct(id: number): void {
        this.apiService.deleteProduct(id).subscribe(res => {
            if (res.code === Constants.RESPONSE_CODE.SUCCESS) {
                this.toast.success('Xóa danh mục thành công');
                this.isReload.next(true);
            } else {
                this.toast.error('Xóa danh mục thất bại');
                this.isReload.next(false);
            }
        })
    }
}
