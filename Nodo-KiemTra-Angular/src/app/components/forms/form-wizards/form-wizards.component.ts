import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-form-wizards',
  templateUrl: './form-wizards.component.html',
  styleUrls: ['./form-wizards.component.scss']
})
export class FormWizardsComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  isLinear = false;
  firstLinerFormGroup!: FormGroup;
  secondLinerFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private toaster: ToastrService) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  firstEditFormGroup!: FormGroup;
  secondEditFormGroup!: FormGroup;
  isEditable = false;

  ngOnInit(): void {
    this.firstEditFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondEditFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.firstLinerFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondLinerFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    //Archwizard Content
    this.firstArcFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    this.secondArcFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    },
      {
        validator: MustMatch('password', 'cnfPassword')
      });
    this.thirdArcFormGroup = this._formBuilder.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    })
    this.fourthArcFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

    //Archwizard Content
    firstArcFormGroup!: FormGroup;
    secondArcFormGroup!: FormGroup;
    thirdArcFormGroup!: FormGroup;
    fourthArcFormGroup!: FormGroup;
    maxDate!: Date | any;
  
    //verticalform wizard
    detailForm!: FormGroup;
    contactForm!: FormGroup;
    paymentForm!: FormGroup;
    public finish() {
      this.toaster.success('Successfully Done!')
    }
}
