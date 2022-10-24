import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {defaultTargetBuilders} from "@angular/cdk/schematics";
import {Constants} from "../../../../shared/Constants";
import {BanDocService} from "../../../../shared/services/bai-tap/ban-doc.service";

@Component({
    selector: 'app-ban-doc-form',
    templateUrl: './ban-doc-form.component.html',
    styleUrls: ['./ban-doc-form.component.scss']
})
export class BanDocFormComponent implements OnInit {

    title: string = '';

    formGroup = this.fb.group({
        id: [''],
        ma: [''],
        ten: ['', Validators.required],
        sdt: ['', [Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)]],
        diaChi: ['', Validators.required],
        ngaySinh: ['', Validators.required],
        ngayTaoTaiKhoan: [new Date(), Validators.required],
        hang: ['', Validators.required],
    })

    constructor(
        private fb: FormBuilder,
        private banDocService: BanDocService,
        private toastrService: ToastrService,
        private matDialogRef: MatDialogRef<BanDocFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any,
    ) {
    }

    ngOnInit(): void {
        this.checkTitleData();

    }

    checkTitleData() {
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.title = 'Thêm mới bạn đọc';
        } else {
            this.title = 'Chỉnh sửa bạn đọc';
            if (this.dataDialog.row) {
                this.formGroup.patchValue(this.dataDialog.row);
            }
        }
    }


    saveTacGia() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.banDocService.createBanDoc(this.formGroup.value);
        } else {
            this.banDocService.updateBanDoc(this.dataDialog.row.id, this.formGroup.value);
        }
        this.banDocService.isCloseDialog.subscribe(data => {
            if (data) {
                this.matDialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.banDocService.isCloseDialog.next(false);
            }
        })
    }

    close() {
        this.matDialogRef.close();
    }

}
