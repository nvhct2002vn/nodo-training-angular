import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout-components/header/header.component';
import {FooterComponent} from './layout-components/footer/footer.component';
import {LoaderComponent} from './layout-components/loader/loader.component';
import {PageHeaderComponent} from './layout-components/page-header/page-header.component';
import {SidebarComponent} from './layout-components/sidebar/sidebar.component';
import {SwitcherComponent} from './layout-components/switcher/switcher.component';
import {TabToTopComponent} from './layout-components/tab-to-top/tab-to-top.component';
import {ContentLayoutComponent} from './layout-components/layout/content-layout/content-layout.component';
import {ErrorLayoutComponent} from './layout-components/layout/error-layout/error-layout.component';
import {FullLayoutComponent} from './layout-components/layout/full-layout/full-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {RightSidebarComponent} from './layout-components/right-sidebar/right-sidebar.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FullscreenDirective} from './directives/fullscreen-toggle.directive';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule} from '@angular/forms';
import {HoverEffectSidebarDirective} from './directives/hover-effect-sidebar.directive';
import {SidemenuToggleDirective} from './directives/sidemenuToggle';
import {ToggleThemeDirective} from './directives/toggle-theme.directive';
import {SwitcherLayoutComponent} from './layout-components/layout/switcher-layout/switcher-layout.component';
import {SwitcherHeaderComponent} from './layout-components/switcher-header/switcherheader.component';
import {InlineMessageComponent} from "./components/inline-message/inline-message.component";
import {ConfirmDialogComponent} from "./components/confirm-dialog/confirm-dialog.component";
import {OnlynumberDirective} from "./directives/onlynumber.directive";
import {HelloPipe} from './pipes/hello.pipe';
import {NgxSpinnerModule} from "ngx-spinner";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoaderComponent,
        PageHeaderComponent,
        SidebarComponent,
        SwitcherComponent,
        TabToTopComponent,
        ContentLayoutComponent,
        SwitcherLayoutComponent,
        ErrorLayoutComponent,
        FullLayoutComponent,
        RightSidebarComponent,
        FullscreenDirective,
        HoverEffectSidebarDirective,
        SidemenuToggleDirective,
        ToggleThemeDirective,
        OnlynumberDirective,
        SwitcherHeaderComponent,
        InlineMessageComponent,
        ConfirmDialogComponent,
        HelloPipe,
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
        PerfectScrollbarModule,
        ColorPickerModule,
        FormsModule,
        NgxSpinnerModule
    ],
    entryComponents: [ConfirmDialogComponent],
    exports: [
        PageHeaderComponent,
        TabToTopComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        ErrorLayoutComponent,
        SwitcherComponent,
        LoaderComponent,
        SwitcherLayoutComponent,
        OnlynumberDirective,
        InlineMessageComponent,
        HelloPipe
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class SharedModule {
}
