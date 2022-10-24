import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedUiRoutingModule } from './advanced-ui-routing.module';
import { ChatComponent } from './chat/chat.component';
import { CardsComponent } from './cards/cards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { NgxNotifierModule } from 'ngx-notifier';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxStarsModule } from 'ngx-stars';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ChatComponent,
    CardsComponent,
    ContactsComponent,
    CarouselComponent,
    NotificationsComponent,
    TreeviewComponent,
    TimelineComponent,
    DraggableCardsComponent,
    SweetAlertComponent,
    RatingsComponent,
    SearchComponent,
    UserlistComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AdvancedUiRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    NgbModule, 
    PerfectScrollbarModule,
    DragulaModule.forRoot(),
    NgxNotifierModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatSnackBarModule,
    MatTreeModule, MatIconModule, MatProgressBarModule,
    SweetAlert2Module,NgxStarsModule, NgxStarRatingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    NgSelectModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AdvancedUiModule { }
