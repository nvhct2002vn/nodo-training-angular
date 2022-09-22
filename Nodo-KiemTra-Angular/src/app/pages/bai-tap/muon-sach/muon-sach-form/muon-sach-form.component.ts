import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BanDocService} from "../../../../shared/services/bai-tap/ban-doc.service";
import {ToastrService} from "ngx-toastr";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Constants} from "../../../../shared/Constants";
import {SachService} from "../../../../shared/services/bai-tap/sach.service";
import {MuonSachService} from "../../../../shared/services/bai-tap/muon-sach.service";
import {data} from "autoprefixer";

@Component({
    selector: 'app-muon-sach-form',
    templateUrl: './muon-sach-form.component.html',
    styleUrls: ['./muon-sach-form.component.scss']
})
export class MuonSachFormComponent implements OnInit {

    title: string = '';

    sachs ?: any[];
    banDocs ?: any[];

    formGroup = this.fb.group({
        id: [''],
        banDoc: this.fb.group({
            id: ['', Validators.required]
        }),
        sach: this.fb.group({
            id: ['', Validators.required]
        }),
        soLuong: [1, [Validators.required, Validators.max(9)]],
        ngayGioMuon: ['', Validators.required],
        ngayGioTra: ['', Validators.required],
        trangThai: [1, Validators.required],
        ghiChu: ['', [Validators.maxLength(255)]],
    })

    constructor(
        private fb: FormBuilder,
        private banDocService: BanDocService,
        private sachService: SachService,
        private muonSachService: MuonSachService,
        private toastrService: ToastrService,
        public dialogRef: MatDialogRef<MuonSachFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any
    ) {
    }

    ngOnInit(): void {
        console.log(new Date(7))
        this.checkTitleData();
        this.getAllBanDoc();
        this.getAllSach();

    }

    getAllBanDoc() {
        this.banDocService.getAllBanDoc().subscribe({
            next: (data: any) => {
                this.banDocs = data as any[];
            }
        });
    }

    getAllSach() {
        this.sachService.getAllSach().subscribe({
            next: (data: any) => {
                this.sachs = data as any[];
            }
        });
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
        console.log(this.formGroup.getRawValue());

        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            console.log('Có lỗi rồi ban ơi');
            return;
        }
        if (this.dataDialog.type === Constants.TYPE_DIALOG.NEW) {
            console.log("Thêm mới")
            this.muonSachService.createMuonSach(this.formGroup.value);
        } else {
            this.muonSachService.updateMuonSach(this.dataDialog.row.id, this.formGroup.value);
        }
        this.muonSachService.isCloseDialog.subscribe(data => {
            if (data) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.muonSachService.isCloseDialog.next(false);
            }
        })
    }

    close() {
        this.dialogRef.close();
    }
}
