import {Directive, HostListener} from '@angular/core';
import {LayoutService} from "../services/layout.service";

@Directive({
    selector: '[appToggleTheme]'
})
export class ToggleThemeDirective {
    private body: HTMLBodyElement | any = document.querySelector('body');

    constructor(
        private layoutService: LayoutService,
    ) {
    }

    @HostListener('click') toggleTheme() {

        if (this.body != !this.body) {
            if (this.body.classList.contains('light-menu')) {
                this.body.classList.remove('light-menu');
                this.body.classList.add('dark-menu');
                this.layoutService.IS_DARK_THEME.next(true);
            } else {
                this.body.classList.add('light-menu');
                this.body.classList.remove('dark-menu');
                this.layoutService.IS_DARK_THEME.next(false);
            }
            if (this.body.classList.contains('header-light')) {
                this.body.classList.remove('header-light');
                this.body.classList.add('header-dark');
            } else {
                this.body.classList.add('header-light');
                this.body.classList.remove('header-dark');
            }
            this.body.classList.toggle('dark-theme');
        }
    }
}
