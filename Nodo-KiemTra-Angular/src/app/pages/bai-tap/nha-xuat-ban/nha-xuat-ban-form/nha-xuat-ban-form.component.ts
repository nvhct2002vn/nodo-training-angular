import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TacGiaService} from "../../../../shared/services/bai-tap/tac-gia.service";
import {ToastrService} from "ngx-toastr";
import {Constants} from "../../../../shared/Constants";
import {NhaXuatBanService} from "../../../../shared/services/bai-tap/nha-xuat-ban.service";

@Component({
    selector: 'app-nha-xuat-ban-form',
    templateUrl: './nha-xuat-ban-form.component.html',
    styleUrls: ['./nha-xuat-ban-form.component.scss']
})
export class NhaXuatBanFormComponent implements OnInit {

    title: string = '';

    formGroup = this.fb.group({
        id: [''],
        ma: [''],
        ten: ['', Validators.required],
        trangThai: [''],
        diaChi: ['', Validators.required],
        moTa: ['', Validators.maxLength(255)],
    })

    constructor(
        private fb: FormBuilder,
        private nhaXuatBanService: NhaXuatBanService,
        private snackBar: ToastrService,
        public dialogRef: MatDialogRef<NhaXuatBanFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any
    ) {
    }

    ngOnInit(): void {
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.title = 'Thêm mới nhà xuất bản';
        } else {
            this.title = 'Chỉnh sửa nhà xuất bản';
            if (this.dataDialog.row) {
                this.formGroup.patchValue(this.dataDialog.row);
            }
        }
    }

    saveTacGia() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            console.log('Lỗi');
            return;
        }
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.nhaXuatBanService
                .createNhaXuatBan(this.formGroup.getRawValue());
        } else {
            this.nhaXuatBanService
                .updateNhaXuatBan(this.dataDialog.row.id, this.formGroup.getRawValue());
        }
        this.nhaXuatBanService.isCloseDialog.subscribe(data => {
            if (data) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.nhaXuatBanService.isCloseDialog.next(false);
            }
        })
    }

    close() {
        this.dialogRef.close();
    }
}
