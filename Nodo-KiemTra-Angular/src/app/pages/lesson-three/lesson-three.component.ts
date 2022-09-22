import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-lesson-three',
    templateUrl: './lesson-three.component.html',
    styleUrls: ['./lesson-three.component.scss']
})
export class LessonThreeComponent implements OnInit {
    @Input() cardTitle!: string;
    @Input() isShowBtn!: boolean;
    @Output() onSubmitForm = new EventEmitter<any>();

    formGroup = this.fb.group({
        name: [{value: 'Quyen', disabled: true}, Validators.required],
        age: [18, [Validators.required, Validators.max(35)]],
        address: ['address', Validators.maxLength(100)],
        phones: new FormArray([])
    });
    // formGroup = new FormGroup({
    //     name: new FormControl('Quyen', Validators.required),
    //     age: new FormControl('', [Validators.required, Validators.max(35)]),
    //     address: new FormControl('', Validators.maxLength(100)),
    //     phones: new FormArray([])
    // });

    get phonesControls() {
        return (this.formGroup?.get('phones') as FormArray).controls;
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
    }

    doSubmit() {
        this.formGroup.markAllAsTouched();
        if (this.formGroup.invalid) {
            return;
        }
        // console.log(this.formGroup.value);
        // console.log(this.formGroup.getRawValue());
        this.onSubmitForm.emit(this.formGroup.getRawValue());
    }

    addPhonesControl() {
        this.phonesControls.push(new FormControl(''));
    }

    removePhoneControl() {
        (this.formGroup.get('phones') as FormArray).removeAt(this.phonesControls.length - 1);
    }

    resetForm() {
        this.formGroup.reset();
    }
}
