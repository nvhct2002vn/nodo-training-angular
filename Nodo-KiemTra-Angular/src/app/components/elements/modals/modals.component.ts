import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  public selectedDate;
  public datePickerConfig;
  
  model!: NgbDateStruct;
  selected!: {startDate: Moment, endDate: Moment};

  constructor(
    private modalService: NgbModal
  ) {
    this.modalService.activeInstances.subscribe((list) => {
      this.modalsNumber = list.length;
    });

    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "YYYY-MM-DD HH:mm",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    }
    this.selectedDate = new Date();
  }

  ngOnInit(): void {
  }

  BasicOpen(basicmodal:any) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal:any) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal:any) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  GridOpen(gridmodal:any) {
    this.modalService.open(gridmodal, { size: 'lg' });
  }

  SuccessOpen(successmodal:any) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal:any) {
    this.modalService.open(warningmodal, { centered: true });
  }

  openScrollableContent(scrolling:any) {
    this.modalService.open(scrolling, { scrollable: true });
  }

  Select2Open(select2modal:any) {
    this.modalService.open(select2modal);
  }
  DatePickerOpen(datepickermodal:any) {
    this.modalService.open(datepickermodal);
  }
  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }
  popoverModal(popover:any) {
    this.modalService.open(popover);
  }

  modalsNumber = 0;


  open() {
    this.modalService.open(NgbdModal1Content);
  }
}


@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p><button class="btn btn-lg btn-outline-primary" (click)="open()">Launch demo modal</button></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger " (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal1Content {
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  open() {
    this.modalService.open(NgbdModal2Content, {
      size: 'lg'
    });
  }
}

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-danger" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal2Content {
  constructor(public activeModal: NgbActiveModal) {}
}