import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Constants} from "../../Constants";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
    title: string = '';
    message: string = '';

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public dataDialog?: any,
    ) {
    }

    ngOnInit(): void {
        this.title = this.dataDialog.title;
        this.message = this.dataDialog.message;
    }

    onDismiss(): void {
        this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.CLOSE);
    }

    onConfirm(): void {
        this.dialogRef.close(Constants.RESULT_CLOSE_DIALOG.CONFIRM);
    }

}
