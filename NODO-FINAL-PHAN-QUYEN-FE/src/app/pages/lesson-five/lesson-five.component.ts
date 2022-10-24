import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LessonFiveService} from "../../shared/services/lesson-five.service";
import {Page} from "../../shared/model/page";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-lesson-five',
    templateUrl: './lesson-five.component.html',
    styleUrls: ['./lesson-five.component.scss'],
})
export class LessonFiveComponent implements OnInit {
    items = [];
    page = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name', prop: 'fullName', flexGrow: 3},
        {name: 'Age', prop: 'age', flexGrow: 3},
        {name: 'Gender', prop: 'gender', flexGrow: 3},
        {name: 'Position', prop: 'position', flexGrow: 3},
        {name: 'Address', prop: 'address', flexGrow: 3},
        {name: 'Phone number', prop: 'phoneNumber', flexGrow: 3},
        {name: 'Created date', prop: 'createdDate', flexGrow: 3},
        {name: 'Created user', prop: 'createdUser', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 2},
    ];

    formGroup = this.fb.group({
        id: [''],
        fullName: ['', Validators.required],
        age: ['', [Validators.max(35)]],
        address: ['', Validators.maxLength(100)],
        phoneNumber: [''],
        position: [''],
        gender: [''],
    });

    constructor(
        private fb: FormBuilder,
        private lessonFiveService: LessonFiveService,
        private toastrService: ToastrService,
    ) {
    }

    ngOnInit(): void {
        this.prepareData();
    }

    prepareData() {
        this.getStaffs();
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        if (this.formGroup.getRawValue().id) {
            this.lessonFiveService.updateStaff(this.formGroup.getRawValue())
                .subscribe({
                    next: () => {
                        this.toastrService.success(`Successful`);
                        this.formGroup.reset();
                        this.getStaffs();
                    }, error: (error) => {
                        this.toastrService.error(`Failed !!!`);
                        console.error(error);
                    }
                })
        } else {
            this.lessonFiveService.addStaff(this.formGroup.getRawValue())
                .subscribe(_ => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getStaffs();
                }, error => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                });
        }

    }

    getStaffs() {
        this.lessonFiveService.getStaffs()
            .subscribe((next: any) => {
                console.log('next', next);
                this.items = next;
            });
    }

    edit(row: any) {
        this.formGroup.patchValue(row);
    }

    delete(id: any) {
        this.lessonFiveService.deleteStaff(id).subscribe({
            next: () => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getStaffs();
            }, error: (error) => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            }
        })
    }
}
