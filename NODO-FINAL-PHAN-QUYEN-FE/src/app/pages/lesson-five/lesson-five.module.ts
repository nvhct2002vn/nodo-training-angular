import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonFiveRoutingModule} from './lesson-five-routing.module';
import {LessonFiveComponent} from './lesson-five.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {LessonFiveService} from "../../shared/services/lesson-five.service";


@NgModule({
    declarations: [
        LessonFiveComponent
    ],
    imports: [
        CommonModule,
        LessonFiveRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatRadioModule,
        NgxDatatableModule,
    ],
    providers:[LessonFiveService]
})
export class LessonFiveModule {
}
