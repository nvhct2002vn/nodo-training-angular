import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NhomQuyenService} from "../../../shared/services/quan-ly-phan-quyen/nhom-quyen.service";
import {NhomQuyenMenuService} from "../../../shared/services/quan-ly-phan-quyen/nhom-quyen-menu.service";
import {MatDialog} from "@angular/material/dialog";
import {PhanQuyenComponent} from "../phan-quyen/phan-quyen.component";
import {RightQuyenService} from "../../../shared/services/quan-ly-phan-quyen/right-quyen.service";
import {data} from "autoprefixer";
import {RightItemService} from "../../../shared/services/quan-ly-phan-quyen/right-item.service";
import {Constants} from "../../../shared/Constants";

@Component({
    selector: 'app-quan-ly-phan-quyen-list',
    templateUrl: './quan-ly-phan-quyen-list.component.html',
    styleUrls: ['./quan-ly-phan-quyen-list.component.scss']
})
export class QuanLyPhanQuyenListComponent implements OnInit {

    checkButton = true;
    tenNhom = '';

    idNhomQuyenClick: any;

    rightItems: any[] = [];
    rightQuyens: any[] = [];

    displayedColumns: string[] = ['tenNhom'];
    displayedColumns2: string[] = ['tenChucNang', 'danhMucMenu', 'thaoTac', 'quyen'];

    dataSource!: MatTableDataSource<any>;
    dataSource2!: MatTableDataSource<any>;

    @ViewChild('paginator') paginator: MatPaginator | any;
    @ViewChild('paginator2') paginator2: MatPaginator | any;

    ngAfterViewInit() {
    }

    constructor(
        private apiNhomQuyen: NhomQuyenService,
        private apiNhomQuyenMenu: NhomQuyenMenuService,
        private apiRightQuyen: RightQuyenService,
        private apiRightItem: RightItemService,
        private matDiaLog: MatDialog,
    ) {
    }

    ngOnInit(): void {
        this.getAllNhomQuyen();
        this.getAllNhomQuyenMenu();
    }

    getAllNhomQuyen() {
        this.apiNhomQuyen.getAllNhomQuyen().subscribe({
            next: (data: any) => {
                this.dataSource = new MatTableDataSource<any>(data);
                this.dataSource.paginator = this.paginator;
            }
        })
    }

    getAllNhomQuyenMenu() {
        this.apiNhomQuyenMenu.getAllNhomQuyenMenu().subscribe({
            next: (data: any) => {
                this.dataSource2 = new MatTableDataSource<any>(data);
                this.dataSource2.paginator = this.paginator2;
            }
        })
    }

    getNhomQuyenMenu(row: any) {
        this.tenNhom = row.name;
        this.checkButton = false;
        this.idNhomQuyenClick = row;
        console.log('id nhom quyen menu: ', this.idNhomQuyenClick)
        this.getAllItem();
        this.getAllRightQuyen();

        this.apiNhomQuyenMenu.getAllNhomQuyenMenu().subscribe({
            next: (data: any) => {
                data = data.filter((m: { nhomQuyen: { id: number; }; }) => m.nhomQuyen.id == row.id);
                this.dataSource2 = new MatTableDataSource<any>(data);
                this.dataSource2.paginator = this.paginator2;
            }
        })
    }

    openPhanQuyen(row: any) {
        const idNhomQuyen = row.id;
        const idQuyen: any[] = [];

        this.apiRightQuyen.getByNhomQuyenMenu(row.id).subscribe({
            next: (data: any) => {
                for (const x of data) {
                    idQuyen.push(x.rightItem.id);
                }
            }, error: (err: any) => {
                console.log(err);
            }
        });
        const diaLogRef = this.matDiaLog.open(PhanQuyenComponent, {
            width: '300px',
            disableClose: true,
            hasBackdrop: true,
            data: {
                idQuyen, idNhomQuyen,
            }
        });
        diaLogRef.afterClosed().subscribe(rs => {
                if (rs == Constants.RESULT_CLOSE_DIALOG.SUCCESS) {
                    this.getNhomQuyenMenu(this.idNhomQuyenClick);
                }
            }
        )
    }

    getAllRightQuyen() {
        this.apiRightQuyen.getAllRightQuyen().subscribe({
            next: (value: any) => {
                this.rightQuyens = value as any[];
            }
        })
    }

    getAllItem() {
        this.apiRightItem.getRightItem().subscribe({
            next: (value: any) => {
                this.rightItems = value as any[];
            }
        })
    }


    isCheckQuyen(idQuyen: number, rightId: number) {
        for (const x of this.rightQuyens) {
            if (idQuyen == x.nhomQuyenMenu.id && rightId == x.rightItem.id) {
                return true;
            }
        }
        return false;
    }

}
