import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-lesson-one',
    templateUrl: './lesson-one.component.html',
    styleUrls: ['./lesson-one.component.scss']
})
export class LessonOneComponent implements OnInit {
    readonly path = '/pages/les-two';

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    navigateToLessonTwo() {
        // void this.router.navigate([`/pages/les-two`], {queryParams: {manual: true}});
        const val = 'false';
        void this.router.navigateByUrl(`/pages/les-two?manual=${val}`);
    }
}
