import {Component, Inject, OnInit} from '@angular/core';
import {Constants} from "../../../shared/Constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../shared/services/product.service";
import {CategoryService} from "../../../shared/services/category.service";
import {ValidationService} from "../../../shared/services/validation.service";

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

    readonly TYPE_DIALOG = Constants.TYPE_DIALOG;
    title: string = '';
    id: number = -1;
    categoryLst: any[] = [];

    formGroup: FormGroup = this.fb.group({
        name: [null, [Validators.required]],
        price: [null, [Validators.required, Validators.min(1000), Validators.max(99000000)]],
        categoriesId: [-1, [ValidationService.required()]]
    })

    constructor(
        private fb: FormBuilder,
        private productService: ProductService,
        private categoryService: CategoryService,
        public dialogRef: MatDialogRef<ProductFormComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any,
    ) {
    }

    ngOnInit(): void {
        if (this.dataDialog.type === this.TYPE_DIALOG.NEW) {
            this.title = 'Thêm mới sản phẩm';
        } else {
            this.title = 'Cập nhật sản phẩm';
            if (this.dataDialog.row) {
                this.formGroup.patchValue(this.dataDialog.row);
                this.formGroup.get('categoriesId')?.setValue(this.dataDialog.row.categories_id);
                this.id = this.dataDialog.row.id;
            }
        }
        this.getCategoryForCombobox();
    }

    getCategoryForCombobox() {
        this.categoryService.getAllCategory();
        this.categoryService.list.subscribe(value => {
            if (value) {
                this.categoryLst = value;
                this.categoryService.list.next(null);
            }
        });
    }

    onDismiss(): void {
        this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.CLOSE);
    }

    onSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) return;
        console.log(this.formGroup.getRawValue());
        if (this.dataDialog.type === this.TYPE_DIALOG.NEW) {
            this.productService.createProduct(this.formGroup.getRawValue());
        } else {
            this.productService.updateProduct(this.formGroup.getRawValue(), this.id);
        }
        this.productService.isCloseDialog.subscribe(value => {
            if (value) {
                this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.SUCCESS);
                this.productService.isCloseDialog.next(false);
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
