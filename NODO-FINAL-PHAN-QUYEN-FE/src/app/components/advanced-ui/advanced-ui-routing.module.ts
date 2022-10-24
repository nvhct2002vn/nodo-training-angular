import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'draggable-cards',
        component: DraggableCardsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'ratings',
        component: RatingsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'sweet-alerts',
        component: SweetAlertComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      },
      {
        path: 'treeview',
        component: TreeviewComponent
      },
      {
        path: 'userlist',
        component: UserlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedUiRoutingModule { }
