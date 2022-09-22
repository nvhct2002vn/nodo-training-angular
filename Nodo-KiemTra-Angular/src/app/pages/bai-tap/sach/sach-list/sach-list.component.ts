import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {Constants} from "../../../../shared/Constants";
import {SachService} from "../../../../shared/services/bai-tap/sach.service";
import {SachFormComponent} from "../sach-form/sach-form.component";

@Component({
    selector: 'app-sach-list',
    templateUrl: './sach-list.component.html',
    styleUrls: ['./sach-list.component.scss']
})
export class SachListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'ma', 'ten', 'nhaXuatBan',
        'tacGia', 'chuDe', 'namSanXuat', 'moTa', 'soLuongConLai',
        'soLuongDangMuon', 'tongSoSach', 'thaoTac'];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private dialogService: MatDialog,
        private snackBar: ToastrService,
        private sachService: SachService
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.sachService.getAllSach().subscribe({
            next: (data: any) => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error: (err) => {
                console.log(err);
            }
        })
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
                message: 'Bạn có muốn xóa bản ghi này?'
            }
        });
        dialogRef.afterClosed().subscribe(rs => {
            console.log(rs)
            if (rs === Constants.RESULT_CLOSE_DIALOG.CONFIRM) {
                console.log(id);
                this.sachService.deleteSach(id);
            }
        })
    }

    openDiaLogUpdateOrCreate(type: any, row ?: any) {
        const dialogRef = this.dialogService.open(SachFormComponent, {
            width: '700px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type, row
            }
        })
        dialogRef.afterClosed().subscribe(_ => {
            if (type == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                this.getAll();
            }
            }
        )
    }


}
