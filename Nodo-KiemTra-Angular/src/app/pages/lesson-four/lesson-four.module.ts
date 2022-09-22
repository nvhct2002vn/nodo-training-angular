import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonFourRoutingModule} from './lesson-four-routing.module';
import {LessonFourComponent} from './lesson-four.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {LessonThreeModule} from "../lesson-three/lesson-three.module";


@NgModule({
    declarations: [
        LessonFourComponent
    ],
    imports: [
        CommonModule,
        LessonFourRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        LessonThreeModule
    ]
})
export class LessonFourModule {
}
