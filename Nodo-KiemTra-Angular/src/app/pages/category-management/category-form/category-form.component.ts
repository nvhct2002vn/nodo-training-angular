import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Constants} from "../../../shared/Constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../shared/services/category.service";

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
    readonly TYPE_DIALOG = Constants.TYPE_DIALOG;
    title: string = '';
    id: number = -1;

    formGroup: FormGroup = this.fb.group({
        name: [null, [Validators.required, Validators.maxLength(16)]],
        description: [null]
    })

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        public dialogRef: MatDialogRef<CategoryFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any,
    ) {
    }

    ngOnInit(): void {
        if (this.dataDialog.type === this.TYPE_DIALOG.NEW) {
            this.title = 'Thêm mới danh mục';
        } else {
            this.title = 'Cập nhật danh mục';
            if (this.dataDialog.row) {
                this.formGroup.patchValue(this.dataDialog.row);
                this.id = this.dataDialog.row.id;
            }
        }
    }

    onDismiss(): void {
        this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.CLOSE);
    }

    onSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) return;
        if (this.dataDialog.type === this.TYPE_DIALOG.NEW) {
            this.categoryService.createCategory(this.formGroup.getRawValue());
        } else {
            this.categoryService.updateCategory(this.formGroup.getRawValue(), this.id);
        }
        this.categoryService.isCloseDialog.subscribe(value => {
            if (value) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.categoryService.isCloseDialog.next(false);
            }
        });
    }

    isFieldInValid(field: string) {
        // @ts-ignore
        return !this.formGroup.get(field).valid && this.formGroup.get(field).touched;
    }

    isFieldValid(field: string) {
        // @ts-ignore
        return this.formGroup.get(field).valid && this.formGroup.get(field).touched;
    }

}
