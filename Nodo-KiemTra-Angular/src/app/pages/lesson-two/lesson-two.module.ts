import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonTwoRoutingModule} from './lesson-two-routing.module';
import {LessonTwoComponent} from './lesson-two.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        LessonTwoComponent
    ],
    imports: [
        CommonModule,
        LessonTwoRoutingModule,
        FormsModule
    ]
})
export class LessonTwoModule {
}
