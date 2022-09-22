import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {LessonThreeComponent} from "../lesson-three/lesson-three.component";

@Component({
    selector: 'app-lesson-four',
    templateUrl: './lesson-four.component.html',
    styleUrls: ['./lesson-four.component.scss']
})
export class LessonFourComponent implements OnInit {

    @ViewChild(LessonThreeComponent, {static: false}) lesThreeComp!: LessonThreeComponent;
    @ViewChild('secondComp', {static: false}) secondComp!: LessonThreeComponent;
    @ViewChildren(LessonThreeComponent) allComps!: QueryList<LessonThreeComponent>;

    constructor() {
    }

    ngOnInit(): void {
        // this.lesThreeComp.resetForm();
    }

    resetForm() {
        // this.lesThreeComp.resetForm();
        // this.lesThreeComp.formGroup.reset();
        this.secondComp.formGroup.reset();
    }

    getValFromChildComp(formVal: any) {
        console.log('parent received', formVal);
        console.log('allComps', this.allComps.toArray());
        this.allComps.toArray().forEach((value: LessonThreeComponent) => value.resetForm());
    }
}
