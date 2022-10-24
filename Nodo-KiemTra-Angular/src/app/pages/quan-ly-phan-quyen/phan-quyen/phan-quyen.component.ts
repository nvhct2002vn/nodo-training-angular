import {Component, Inject, inject, OnInit} from '@angular/core';
import {data} from "autoprefixer";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {RightItemService} from "../../../shared/services/quan-ly-phan-quyen/right-item.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RightQuyenService} from "../../../shared/services/quan-ly-phan-quyen/right-quyen.service";
import {Constants} from "../../../shared/Constants";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-phan-quyen',
    templateUrl: './phan-quyen.component.html',
    styleUrls: ['./phan-quyen.component.scss']
})
export class PhanQuyenComponent implements OnInit {

    displayedColumns: string[] = ['select', 'danhSachQuyen'];
    selection = new SelectionModel<any>(true, []);
    dataSource!: MatTableDataSource<any>;
    listQuyen: any[] = [];
    create: any[] = [];
    idMoi: any[] = [];


    idQuyenKhacNhauMoi: any[] = [];
    idQuyenKhacNhauCu: any[] = [];

    constructor(
        private apiRightItem: RightItemService,
        private apiRightQuyen: RightQuyenService,
        private toastrService: ToastrService,
        private matDiaLogRef: MatDialogRef<PhanQuyenComponent>,
        @Inject(MAT_DIALOG_DATA) private matDataDiaLog: any,
    ) {
    }

    ngOnInit(): void {
        this.getAllRightItem();
    }

    //lấy tất cả các quyền ở bảng rightItem để đổ lên table
    getAllRightItem() {
        this.apiRightItem.getRightItem().subscribe({
            next: (data: any) => {
                this.listQuyen = data as any[];
                this.dataSource = new MatTableDataSource<any>(data);
                this.checkedSelect();
            }
        })
    }

    // lấy những id của quyền đc chọn rồi thêm vào mảng idMoi
    getDataSelectd() {
        for (const x of this.selection.selected) {
            this.idMoi.push(x.id);
        }
    }

    //tạo đối tuợng để thêm vào bảng rightQuyen
    createData(arr: any) {
        for (const x of arr) {
            this.create.push(
                {
                    nhomQuyenMenu: {
                        id: this.matDataDiaLog.idNhomQuyen
                    },
                    rightItem: {
                        id: x
                    }
                }
            )
        }
    }

    timPhanTuKhacNhau(a: any, b: any, array: any) {
        for (const i in a) {
            let check = false;
            for (const j in b) {
                if (a[i] === b[j]) check = true;
            }
            if (!check) {
                array.push(a[i]);
            }
        }
    }

    phanQuyen() {
        this.getDataSelectd();

        console.log('Dữ liệu cũ: ', this.matDataDiaLog.idQuyen);
        console.log('Dữ liệu mới: ', this.idMoi);

        this.timPhanTuKhacNhau(this.idMoi, this.matDataDiaLog.idQuyen, this.idQuyenKhacNhauMoi);
        this.timPhanTuKhacNhau(this.matDataDiaLog.idQuyen, this.idMoi, this.idQuyenKhacNhauCu);

        if (this.idQuyenKhacNhauCu.length > 0) {
            console.log('Những dữ liệu được loại bỏ: ', this.idQuyenKhacNhauCu);
            console.log('Data Xoá: ', this.idQuyenKhacNhauCu);
            this.apiRightQuyen.deleteById(this.matDataDiaLog.idNhomQuyen, this.idQuyenKhacNhauCu);
        }

        if (this.idQuyenKhacNhauMoi.length > 0) {
            console.log('Những dữ liệu được chọn mới: ', this.idQuyenKhacNhauMoi);
            console.log('Data Thêm: ', this.create);
            this.createData(this.idQuyenKhacNhauMoi);
            this.apiRightQuyen.createRightQuyen(this.create);
        }
        this.toastrService.success('Cập nhật thành công!');
        this.matDiaLogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
    }

    //Kiểm tra nếu quyền nhận vào mà trùng với quyền ở bảng rightItem thì nó sẽ check vào ô checkbox
    checkedSelect() {
        for (let i = 0; i < this.listQuyen.length; i++) {
            for (let j = 0; j < this.matDataDiaLog.idQuyen.length; j++) {
                if (this.listQuyen[i].id == this.matDataDiaLog.idQuyen[j]) {
                    this.selection.select(this.listQuyen[i]);
                }
            }
        }
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource?.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }

        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row ?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    closeDiaLog() {
        this.matDiaLogRef.close();
    }
}
