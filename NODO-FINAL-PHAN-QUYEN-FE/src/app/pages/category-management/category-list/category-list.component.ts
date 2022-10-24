import {Component, OnInit} from '@angular/core';
import {DataTable, SimpleDataTable} from "../../../shared/data/tables_data/data_table";
import {Page} from "../../../shared/model/page";
import {MatDialog} from "@angular/material/dialog";
import {CategoryFormComponent} from "../category-form/category-form.component";
import {Constants} from "../../../shared/Constants";
import {ConfirmDialogComponent} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../shared/services/category.service";
import {finalize} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {LayoutService} from "../../../shared/services/layout.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
    THEME_STYLE = '';
    readonly TYPE_DIALOG = Constants.TYPE_DIALOG;
    dataTable: DataTable[] = [];
    page = new Page();
    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1},
        {name: 'Tên danh mục', prop: 'name', flexGrow: 3},
        {name: 'Mô tả', prop: 'description', flexGrow: 3},
        {name: 'Ngày tạo', prop: 'createdDate', flexGrow: 3},
        {name: 'Người tạo', prop: 'lastModifiedByUsername', flexGrow: 3},
        {name: 'Thao tác', prop: 'actions', flexGrow: 2},
    ];
    formSearch: FormGroup = this.fb.group({
        name: [''],
        username: [''],
    });

    constructor(
        private dialogService: MatDialog,
        private toast: ToastrService,
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private layoutService: LayoutService
    ) {
        this.page.pageNumber = 0;
        this.page.size = 10;
    }

    ngOnInit(): void {
        this.search();
        this.getTableTheme();
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
        this.categoryService.searchCategory(this.formSearch.getRawValue(), {page: this.page.pageNumber, size: this.page.size});
        this.categoryService.response.subscribe(res => {
            if (res) {
                this.dataTable = res.data;
                this.page.totalElements = res.pagination.totalRecords;
                this.categoryService.response.next(null);
            }
        });
    }

    onOpenFormDialog(type: string, row?: any) {
        this.dialogService.open(CategoryFormComponent, {
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
                this.categoryService.deleteCategory(row.id);
                this.categoryService.isReload.subscribe(value => {
                    if (value) {
                        this.search();
                        this.categoryService.isReload.next(false);
                    }
                })
            }
        })
    }

}
