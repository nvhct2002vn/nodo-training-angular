import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-inline-message',
    templateUrl: './inline-message.component.html',
    styleUrls: ['./inline-message.component.scss']
})
export class InlineMessageComponent implements OnInit {
    @Input() formName!: any;
    @Input() message!: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    getErrorMessage() {
        if (this.formName) {
            if (this.formName.hasError('required')) {
                return `Vui lòng nhập ${this.message}`;
            } else if (this.formName.hasError('maxlength')) {
                return `${this.message} không được vượt quá ${this.formName?.errors?.['maxlength'].requiredLength} ký tự`;
            } else if (this.formName.hasError('max')) {
                return `${this.message} không được lớn hơn ${this.formName?.errors?.['max'].max}`;
            }
        }
        return '';
    }
}
