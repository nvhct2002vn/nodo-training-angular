import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SachService} from "../../../../shared/services/bai-tap/sach.service";
import {ToastrService} from "ngx-toastr";
import {Constants} from "../../../../shared/Constants";
import {NhaXuatBanService} from "../../../../shared/services/bai-tap/nha-xuat-ban.service";
import {TacGiaService} from "../../../../shared/services/bai-tap/tac-gia.service";

@Component({
    selector: 'app-sach-form',
    templateUrl: './sach-form.component.html',
    styleUrls: ['./sach-form.component.scss']
})
export class SachFormComponent implements OnInit {

    title: string = '';

    nhaXuatBans?: any[];

    tacGias?: any[];

    tongSoSach !: number;

    formGroup = this.fb.group({
        id: [''],
        ma: [''],
        ten: ['', Validators.required],
        nhaXuatBan: this.fb.group({
            id: ['', Validators.required],
        }),
        tacGia: this.fb.group({
            id: ['', Validators.required],
        }),
        chuDe: ['', Validators.required],
        namSanXuat: ['', Validators.required],
        moTa: ['', Validators.maxLength(255)],
        tongSoSach: ['', Validators.required],
        // soLuongConLai: ['', Validators.required],
        soLuongDangMuon: [0],
    })

    constructor(
        private fb: FormBuilder,
        private sachService: SachService,
        private nhaXuatBanService: NhaXuatBanService,
        private tacGiaService: TacGiaService,
        private snackBar: ToastrService,
        public dialogRef: MatDialogRef<SachFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any
    ) {
    }

    ngOnInit(): void {
        this.getAllNhaXuatBan();
        this.getAllTacGia();
        this.checkTitleData();

    }

    // sumSoLuongSach() {
    //     const soLuongDangMuon = this.formGroup.getRawValue().soLuongDangMuon;
    //     const soLuongConLai = this.formGroup.getRawValue().soLuongConLai;
    //     this.tongSoSach = soLuongDangMuon + soLuongConLai;
    //     this.formGroup.patchValue({tongSoSach: this.tongSoSach});
    // }

    checkTitleData() {
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.title = 'Thêm sách';
        } else {
            this.title = 'Sửa sách';
            if (this.dataDialog.row) {
                this.formGroup.patchValue(this.dataDialog.row);
            }
        }
    }

    getAllNhaXuatBan() {
        this.nhaXuatBanService.getAllNhaXuatBan().subscribe({
            next: (data: any) => {
                this.nhaXuatBans = data as any[];
            }
        });
    }

    getAllTacGia() {
        this.tacGiaService.getAllTacGia().subscribe({
            next: (data: any) => {
                this.tacGias = data as any[];
            }
        })
    }

    saveTacGia() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.dataDialog.type == Constants.TYPE_DIALOG.NEW) {
            this.sachService.createSach(this.formGroup.value)
        } else {
            this.sachService.updateSach(this.dataDialog.row.id, this.formGroup.value)
        }
        this.sachService.isCloseDialog.subscribe(data => {
            if (data) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.sachService.isCloseDialog.next(false);
            }
        })

        console.log(this.formGroup.getRawValue())
    }

    close() {
        this.dialogRef.close();
    }
}
