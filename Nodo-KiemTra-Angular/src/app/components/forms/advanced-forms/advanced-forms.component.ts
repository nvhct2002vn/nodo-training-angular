import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {
  DateRangePickerComponent,
  IDateRange,
  IDateRangePickerOptions,
} from 'ngx-daterange';
import { map, Observable } from 'rxjs';
import { AdvancedFormService, Month, Person } from './advanced-form.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss'],
})
export class AdvancedFormsComponent implements OnInit {
  selectedTime : any 

  selected: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };
  invalidDates: moment.Moment[] = [
    moment().add(2, 'days'),
    moment().add(3, 'days'),
    moment().add(5, 'days'),
  ];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  constructor(private formBuilder: FormBuilder, private AdvancedFormService: AdvancedFormService) {
    this.alwaysShowCalendars = true;
  }

  ngOnInit(): void {
    // setup "parent" form group for the date piker instance to add itself to.
    this.form = this.formBuilder.group({});
    // ng-select
      this.heroForm = this.formBuilder.group({
        month: [null, Validators.required],
      });
      // Month
      this.AdvancedFormService.getMonth().subscribe(ele => this.month = ele);
      this.month$ = this.AdvancedFormService.getMonth();

      this.AdvancedFormService.getPeople()
        .pipe(map((x:any) => x.filter((y:any) => !y.disabled)))
        .subscribe((res) => {
            this.people = res;
            this.selectedPeople = [];
      });
  }
  //tele
  telInputObject(obj: any) {
    // console.log(obj);
    obj.setCountry('in');
  }
  getNumber(number: any) {
    // console.log(number);
  }
  hasError(err: any) {
    // console.log(err);
  }
  onCountryChange(country: any) {
    // console.log(country);
  }
  
  // ngx daterangepicker
  @ViewChild('dateRangePicker', { static: true })
  dateRangePicker!: DateRangePickerComponent;

  firstFieldEmittedValue!: IDateRange;
  firstFieldOptions: IDateRangePickerOptions = {
    autoApply: false,
    format: 'MM/DD/YYYY',
    icons: 'material',
    minDate: moment().subtract(10, 'years'),
    maxDate: moment().add(3, 'years'),
    preDefinedRanges: [
      {
        name: 'Last Week',
        value: {
          start: moment().subtract(1, 'week').startOf('week'),
          end: moment().subtract(1, 'week').endOf('week'),
        },
      },
      {
        name: 'Two Weeks Ago',
        value: {
          start: moment().subtract(2, 'week').startOf('week'),
          end: moment().subtract(2, 'week').endOf('week'),
        },
      },
    ],
    validators: Validators.required,
  };

  form: FormGroup | any = null;
  onRangeSelected(value: IDateRange): void {
    this.firstFieldEmittedValue = value;
  }

  onReset(event: Event): void {
    this.dateRangePicker.reset(event);
  }

  
  // dropzone
  files: File[] = [];
  filesPreview: File[] = [];
  filesDisabled: File[] = [];
  disable = true;

	onSelect(event:any) {
		// console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event:any) {
		// console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
	onPreviewFileSelect(event:any) {
		// console.log(event);
		this.filesPreview.push(...event.addedFiles);
	}

	onPreviewFileRemove(event:any) {
		// console.log(event);
		this.filesPreview.splice(this.filesPreview.indexOf(event), 1);
	}

  // ng-select
  selectedAccount = 'AZ';
  accounts = [
      { name: 'Arizona', value: 'AZ', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Colorado', value: 'CO', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Idaho', value: 'ID', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Montana', value: 'MT', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Nebraska', value: 'NE', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'New Mexico', value: 'NM', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'North Dakota', value: 'AZ', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Utah', value: 'UT', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Wyoming', value: 'WY', country: 'Mountain Time Zone', child: { state: 'Active' } },
      { name: 'Alabama', value: 'AL', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Arkansas', value: 'AR', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Illinois', value: 'IL', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Iowa', value: 'IA', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Kansas', value: 'KS', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Kentucky', value: 'KY', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Louisiana', value: 'LA', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Minnesota', value: 'MN', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Mississippi', value: 'MS', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Missouri', value: 'MO', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Oklahoma', value: 'OK', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'South Dakota', value: 'SD', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Texas', value: 'TX', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Tennessee', value: 'TN', country: 'Central Time Zone', child: { state: 'Active' } },
      { name: 'Wisconsin', value: 'WI', country: 'Central Time Zone', child: { state: 'Active' } },
  ];

  
  month: Month[] = [];
  selectedMonth = '6';
  month$!: Observable<any[]>;
  people: Person[] = [];
  selectedPeople = [];
  heroForm!: FormGroup;  
  toggleAgeDisable() {    
    if (this.heroForm.controls['month'].disabled) {
        this.heroForm.controls['month'].enable();
    } else {
        this.heroForm.controls['month'].disable();
    }
  }
  
  cities = [
    {
        id: 1,
        name: 'Vilnius',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
    { id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15' },
    {
        id: 3,
        name: 'Pavilnys',
        avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'
    },
    {
        id: 4,
        name: 'Siauliai',
        avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'
    },
  ];

  selectedCity = this.cities[0].name;

}
