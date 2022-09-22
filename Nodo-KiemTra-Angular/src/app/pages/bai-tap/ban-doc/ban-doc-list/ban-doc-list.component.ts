import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BanDocService} from "../../../../shared/services/bai-tap/ban-doc.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {Constants} from "../../../../shared/Constants";
import {ToastrService} from "ngx-toastr";
import {BanDocFormComponent} from "../ban-doc-form/ban-doc-form.component";

@Component({
    selector: 'app-ban-doc-list',
    templateUrl: './ban-doc-list.component.html',
    styleUrls: ['./ban-doc-list.component.scss']
})
export class BanDocListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'ma', 'ten', 'sdt',
        'diaChi', 'ngaySinh', 'ngayTaoTaiKhoan', 'hang', 'thaoTac'];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private banDocService: BanDocService,
        private dialogService: MatDialog,
        private toats: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }


    getAll() {
        this.banDocService.getAllBanDoc().subscribe({
            next: (data: any) => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }, error: err => {
                console.log(err)
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
            if (rs == Constants.RESULT_CLOSE_DIALOG.CONFIRM) {
                this.banDocService.deleteBanDoc(id);
            }
        });
    }

    openDiaLogUpdateOrCreate(type: any, row ?: any) {
        const dialogRef = this.dialogService.open(BanDocFormComponent, {
            width: '700px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type, row
            }
        });
        dialogRef.afterClosed().subscribe({
            next: (rs => {
                if (type == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                    this.getAll();
                }
            })
        })
    }

}
