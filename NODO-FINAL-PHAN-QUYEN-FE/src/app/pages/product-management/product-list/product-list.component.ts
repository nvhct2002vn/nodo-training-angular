import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../shared/Constants";
import {DataTable} from "../../../shared/data/tables_data/data_table";
import {Page} from "../../../shared/model/page";
import {ProductService} from "../../../shared/services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductFormComponent} from "../product-form/product-form.component";
import {LayoutService} from "../../../shared/services/layout.service";
import {CategoryService} from "../../../shared/services/category.service";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    THEME_STYLE = '';
    private body: HTMLBodyElement | any = document.querySelector('body');
    readonly TYPE_DIALOG = Constants.TYPE_DIALOG;
    dataTable: DataTable[] = [];
    page = new Page();
    categoryLst: any[] = [];
    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1},
        {name: 'Tên sản phẩm', prop: 'name', flexGrow: 3},
        {name: 'Giá tiền', prop: 'price', flexGrow: 3},
        {name: 'Danh mục', prop: 'nameCategory', flexGrow: 3},
        {name: 'Merchant', prop: 'nameMerchant', flexGrow: 3},
        {name: 'Ngày tạo', prop: 'createdDate', flexGrow: 3},
        {name: 'Người tạo', prop: 'nameUser', flexGrow: 3},
        {name: 'Thao tác', prop: 'actions', flexGrow: 2},
    ];
    formSearch: FormGroup = this.fb.group({
        name: [''],
        idCategory: [-1]
    });

    constructor(
        private dialogService: MatDialog,
        private toast: ToastrService,
        private fb: FormBuilder,
        private productService: ProductService,
        private layoutService: LayoutService,
        private categoryService: CategoryService
    ) {
        this.page.pageNumber = 0;
        this.page.size = 10;
    }

    ngOnInit(): void {
        this.search();
        this.getTableTheme();
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

    getTableTheme() {
        this.layoutService.IS_DARK_THEME.subscribe(value => {
            if (value) {
                this.THEME_STYLE = 'dark'
            } else {
                this.THEME_STYLE = 'material'
            }
        });
    }

    search() {
        this.page.pageNumber = 0;
        this.setPage({offset: this.page.pageNumber, limit: this.page.size});
    }

    setPage(event: any) {
        this.page.pageNumber = event.offset;
        this.page.size = event.limit;
        this.productService.searchProduct(this.formSearch.getRawValue(), {page: this.page.pageNumber, size: this.page.size});
        this.productService.response.subscribe(res => {
            if (res) {
                this.dataTable = res.data;
                this.page.totalElements = res.pagination.totalRecords;
                this.productService.response.next(null);
            }
        });
    }

    onOpenFormDialog(type: string, row?: any) {
        this.dialogService.open(ProductFormComponent, {
            width: '50vw',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type,
                row
            }
        }).afterClosed().subscribe(rs => {
            if (rs === Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                this.page.pageNumber = 0;
                this.search();
            }
        });
    }

    onOpenDeleteDialog(row: any) {
        const dialogRef = this.dialogService.open(ConfirmDialogComponent, {
            width: '25vw',
            disableClose: true,
            hasBackdrop: true,
            data: {
                message: 'Bạn có muốn xóa bản ghi này?'
            }
        });
        dialogRef.afterClosed().subscribe(rs => {
            if (rs === Constants.RESULT_CLOSE_DIALOG.CONFIRM) {
                this.productService.deleteProduct(row.id);
                this.productService.isReload.subscribe(value => {
                    if (value) {
                        this.search();
                        this.productService.isReload.next(false);
                    }
                })
            }
        })
    }

}
