import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxDateRangeModule } from 'ngx-daterange';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { AdvancedFormService } from './advanced-forms/advanced-form.service';
import { MatStepperModule } from '@angular/material/stepper';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    FormElementsComponent,
    AdvancedFormsComponent,
    FormLayoutsComponent,
    FormElementSizesComponent,
    FormValidationComponent,
    FormWizardsComponent,
    FormEditorComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ColorPickerModule,
    NgbModule,
    NgSelectModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule, MatStepperModule,
    NgxSliderModule,
    Ng2TelInputModule,
    NgxDaterangepickerMd.forRoot(),
    NgxDateRangeModule,
    NgxMaterialTimepickerModule,
    NgxDropzoneModule,
    ToastrModule,
    ArchwizardModule,
    QuillModule.forRoot(),
    CKEditorModule,
    AngularEditorModule
  ],
  providers:[
    AdvancedFormService,
    ToastrService
  ]
})
export class FormModule { }
