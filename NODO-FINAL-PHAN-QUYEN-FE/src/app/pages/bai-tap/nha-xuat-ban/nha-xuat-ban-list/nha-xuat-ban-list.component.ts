import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {TacGiaService} from "../../../../shared/services/bai-tap/tac-gia.service";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {Constants} from "../../../../shared/Constants";
import {TacGiaFormComponent} from "../../tac-gia/tac-gia-form/tac-gia-form.component";
import {NhaXuatBanService} from "../../../../shared/services/bai-tap/nha-xuat-ban.service";
import {NhaXuatBanFormComponent} from "../nha-xuat-ban-form/nha-xuat-ban-form.component";

@Component({
    selector: 'app-nha-xuat-ban-list',
    templateUrl: './nha-xuat-ban-list.component.html',
    styleUrls: ['./nha-xuat-ban-list.component.scss']
})
export class NhaXuatBanListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'ma', 'ten', 'trangThai', 'diaChi', 'moTa', 'thaoTac'];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        // private fb: FormGroup,
        private dialogService: MatDialog,
        private snackBar: ToastrService,
        private nhaXuatBanService: NhaXuatBanService
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.nhaXuatBanService.getAllNhaXuatBan().subscribe({
            next: (data: any) => {
                console.log(data);
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
                this.nhaXuatBanService.deleteNhaXuatBan(id);
            }
            this.nhaXuatBanService.isCloseDialog.subscribe(data => {
                if (data) {
                    this.nhaXuatBanService.isCloseDialog.next(false);
                    this.getAll();
                }
            })
        })
    }

    openDiaLogUpdateOrCreate(type: any, row ?: any) {
        const dialogRef = this.dialogService.open(NhaXuatBanFormComponent, {
            width: '700px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type, row
            }
        })
        dialogRef.afterClosed().subscribe(rs => {
                if (rs == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                    this.getAll();
                }
            }
        )
    }

}
