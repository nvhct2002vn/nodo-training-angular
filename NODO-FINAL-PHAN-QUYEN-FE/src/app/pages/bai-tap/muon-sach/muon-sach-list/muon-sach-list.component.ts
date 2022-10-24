import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MuonSachService} from "../../../../shared/services/bai-tap/muon-sach.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {Constants} from "../../../../shared/Constants";
import {MuonSachFormComponent} from "../muon-sach-form/muon-sach-form.component";

@Component({
    selector: 'app-muon-sach-list',
    templateUrl: './muon-sach-list.component.html',
    styleUrls: ['./muon-sach-list.component.scss']
})
export class MuonSachListComponent implements OnInit {


    displayedColumns: string[] = ['id', 'banDoc', 'sach', 'soLuong',
        'ngayGioMuon', 'ngayGioTra', 'trangThai', 'ghiChu', 'thaoTac'];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private muonSachService: MuonSachService,
        private matDialog: MatDialog,
        private toast: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.muonSachService.getAllMuonSach().subscribe({
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
        const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            width: '25vw',
            disableClose: true,
            hasBackdrop: true,
            data: {
                title: 'Xoá cái này',
                message: 'Bạn có muốn xóa bản ghi này?'
            }
        });
        dialogRef.afterClosed().subscribe({
            next: (rs => {
                if (rs == Constants.RESULT_CLOSE_DIALOG.CONFIRM) {
                    this.muonSachService.deleteMuonSach(id);
                    this.muonSachService.isCloseDialog.subscribe(data => {
                        if (data) {
                            this.muonSachService.isCloseDialog.next(false);
                            this.getAll();
                        }
                    })
                }
            })
        })
    }

    openDiaLogUpdateOrCreate(type: any, row ?: any) {
        const dialogRef = this.matDialog.open(MuonSachFormComponent, {
            width: '700px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                type, row
            }
        });
        dialogRef.afterClosed().subscribe(rs => {
            console.log(rs);
            if (rs == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                this.getAll();
            }
        })
    }
}
