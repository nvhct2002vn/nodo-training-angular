import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(private modal: NgbModal) {}

  ngOnInit(): void {
  }

  @ViewChild('modalContent', { static: true })
  
  modalContent!: TemplateRef<any>;
  
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();

  modalData!: any | {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    
    {
      start: subDays(startOfDay(new Date()), 1),
      // end: addDays(new Date(), 1),
      title: 'Calendar Events',
      cssClass : 'bg-primary',
      actions: this.actions,
      allDay: false,
      draggable: true,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      // end: addDays(new Date(), 1),
      title: 'Birthday Events',
      cssClass : 'bg-secondary-transparent-70',
      actions: this.actions,
      draggable: true,
    },
    {
      start:subDays(startOfDay(new Date()), 1),
      // end: addDays(new Date(), 1),
      title: 'Holiday Calendar',
      cssClass : 'bg-warning-transparent-70',
      allDay: true,
      draggable: true,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      // end: addDays(new Date(), 1),
      title: 'Office Events',
      cssClass : 'bg-info-transparent-70',
      actions: this.actions,
      draggable: true,
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Other Events',
      cssClass : 'bg-success-transparent-70',
      actions: this.actions,
      draggable: true,
    },
  ];

  activeDayIsOpen: boolean = false;

 

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  newEvent!: CalendarEvent;
  addEvent(): void {
    this.newEvent = {
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      draggable: true,
      actions: this.actions,
    }
    this.events.push(this.newEvent);

    this.handleEvent('Add new event', this.newEvent);
    this.refresh.next(this.refresh);
  }

  eventDropped({
    event,
    newStart,
    newEnd,
    allDay,
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.events.indexOf(event);
    if (typeof allDay !== 'undefined') {
      event.allDay = allDay;
    }
    if (externalIndex > -1) {
      this.events.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    if (this.view === 'month') {
      this.viewDate = newStart;
      this.activeDayIsOpen = true;
    }
    this.events = [...this.events];
  }

  externalDrop(event: CalendarEvent) {
    if (this.events.indexOf(event) === -1) {
      this.events = this.events.filter((iEvent) => iEvent !== event);
      this.events.push(event);
    }
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
