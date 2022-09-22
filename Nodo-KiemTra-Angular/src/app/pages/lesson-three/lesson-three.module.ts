import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonThreeRoutingModule} from './lesson-three-routing.module';
import {LessonThreeComponent} from './lesson-three.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        LessonThreeComponent
    ],
    imports: [
        CommonModule,
        LessonThreeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule
    ],
    exports: [LessonThreeComponent]
})
export class LessonThreeModule {
}
