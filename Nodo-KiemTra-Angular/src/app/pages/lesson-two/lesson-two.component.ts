import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-lesson-two',
    templateUrl: './lesson-two.component.html',
    styleUrls: ['./lesson-two.component.scss']
})
export class LessonTwoComponent implements OnInit {
    name = 'initial 1';
    model = 'initial';
    array = [0, 1, 2, 3];

    constructor(private activatedRoute: ActivatedRoute) {
        console.log('activatedRoute', this.activatedRoute);
        console.log('params', this.activatedRoute.snapshot.queryParams);
    }

    ngOnInit(): void {
    }

    onChange(value: string) {
        console.log(value);
    }
}
