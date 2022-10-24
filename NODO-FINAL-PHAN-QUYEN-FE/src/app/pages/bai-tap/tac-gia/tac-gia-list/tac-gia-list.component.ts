import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TacGiaService } from '../../../../shared/services/bai-tap/tac-gia.service';
import { FormGroup } from '@angular/forms';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TacGiaFormComponent } from '../tac-gia-form/tac-gia-form.component';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../../../../shared/Constants';

@Component({
    selector: 'app-tac-gia-list',
    templateUrl: './tac-gia-list.component.html',
    styleUrls: ['./tac-gia-list.component.scss'],
})
export class TacGiaListComponent implements OnInit {
    displayedColumns: string[] = [
        'id',
        'ma',
        'ten',
        'sdt',
        'diaChi',
        'moTa',
        'thaoTac',
    ];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        // private fb: FormGroup,
        private dialogService: MatDialog,
        private snackBar: ToastrService,
        private authorService: TacGiaService
    ) {}

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.authorService.getAllTacGia().subscribe({
            next: (data: any) => {
                console.log(data);
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialogDelete(id: number) {
        console.log(id);
        const dialogRef = this.dialogService.open(ConfirmDialogComponent, {
            width: '25vw',
            disableClose: true,
            hasBackdrop: true,
            data: {
                title: 'Xoá cái này',
                message: 'Bạn có muốn xóa bản ghi này?',
            },
        });
        dialogRef.afterClosed().subscribe((rs) => {
            console.log(rs);
            if (rs === Constants.RESULT_CLOSE_DIALOG.CONFIRM) {
                console.log(id);
                this.authorService.deleteTacGia(id);
                this.authorService.isCloseDialog.subscribe((data) => {
                    if (data) {
                        this.authorService.isCloseDialog.next(false);
                        this.getAll();
                    }
                });
            }
        });
    }

    openDiaLogUpdateOrCreate(type: any, row?: any) {
        const dialogRef = this.dialogService.open(TacGiaFormComponent, {
            width: '700px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type,
                row,
            },
        });
        dialogRef.afterClosed().subscribe((rs) => {
            if (rs == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                this.getAll();
            }
        });
    }
}
