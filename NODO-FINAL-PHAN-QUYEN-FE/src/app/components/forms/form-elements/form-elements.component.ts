import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerService } from 'ngx-color-picker';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  model2!: NgbDateStruct;
  today = this.calendar.getToday();
  placement = 'bottom';

  public color: string = '#2889e9';
  public color13: string = 'rgba(0,255,0,0.5)';
  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';
  public color16: string = '#a51ad633';

  constructor(private cpService: ColorPickerService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  public onChangeColorHex8(color: string): string {
    const hsva = this.cpService.stringToHsva(color, true);

    if (hsva) {
      return this.cpService.outputFormat(hsva, 'rgba', null);
    }

    return '';
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  // rangeslider
  minValue: number = 40;
  maxValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 10,
    maxRange: 50
  };

  FixedminValue: number = 60;
  FixedmaxValue: number = 70;
  Fixedoptions: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    minRange: 10,
    maxRange: 30,
    pushRange: true
  };

  value: number = 10;
  ZeroStartoptions: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true
  };

  Specificvalue: number = 5;
  Specificoptions: Options = {
    floor: -10,
    ceil: 10,
    showSelectionBarFromValue: 0
  };

  customminValue: number = 100;
  custommaxValue: number = 400;
  customoptions: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  dynamicvalue: number = 12;
  dynamicoptions: Options = {
    floor: 0,
    ceil: 12,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 3) {
          return 'red';
      }
      if (value <= 6) {
          return 'orange';
      }
      if (value <= 9) {
          return 'yellow';
      }
      return '#2AE02A';
    }
  };
}
