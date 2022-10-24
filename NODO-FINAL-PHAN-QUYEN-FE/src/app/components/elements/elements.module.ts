import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalsComponent } from './modals/modals.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToastComponent } from './toast/toast.component';
import { TagsComponent } from './tags/tags.component';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ToastsContainer } from './toast/toasts.component';


@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    AvatarComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    BadgeComponent,
    CollapseComponent,
    DropdownComponent,
    ThumbnailsComponent,
    ListGroupComponent,
    ModalsComponent,
    NavigationComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressComponent,
    SpinnersComponent,
    MediaObjectComponent,
    TypographyComponent,
    TooltipComponent,
    ToastComponent,
    TagsComponent,
    TabsComponent,
    ToastsContainer
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ]
})
export class ElementsModule { }
