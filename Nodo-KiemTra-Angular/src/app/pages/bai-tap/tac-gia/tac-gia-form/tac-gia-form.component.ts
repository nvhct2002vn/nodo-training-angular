import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../../../../shared/Constants";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TacGiaService} from "../../../../shared/services/bai-tap/tac-gia.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-tac-gia-form',
    templateUrl: './tac-gia-form.component.html',
    styleUrls: ['./tac-gia-form.component.scss']
})
export class TacGiaFormComponent implements OnInit {

    title: string = '';

    formGroup = this.fb.group({
        id: [''],
        ma: [''],
        ten: ['', Validators.required],
        sdt: ['', [Validators.required, Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)]],
        diaChi: ['', Validators.required],
        moTa: ['', Validators.maxLength(255)],
    })

    constructor(
        private fb: FormBuilder,
        private tacGiaService: TacGiaService,
        private snackBar: ToastrService,
        public dialogRef: MatDialogRef<TacGiaFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any
    ) {
    }

    ngOnInit(): void {
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.title = 'Thêm mới tác giả';
        } else {
            this.title = 'Chỉnh sửa tác giả';
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
            this.tacGiaService
                .createTacGia(this.formGroup.getRawValue());
        } else {
            this.tacGiaService
                .updateTacGia(this.dataDialog.row.id, this.formGroup.getRawValue());
        }
        this.tacGiaService.isCloseDialog.subscribe(data => {
            if (data) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.tacGiaService.isCloseDialog.next(false);
            }
        })
    }

    close() {
        this.dialogRef.close();
    }
}
