import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent implements OnInit {
  rating3: number;
  public form: FormGroup;

  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 0;
  hovered = 0;
  readonly = false;
  heartRate = 3.45;
  ctrl!: FormControl;
  
  constructor(private fb: FormBuilder) {
    this.rating3 = 1;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
    });
    this.ctrl = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {}

  ratingDisplay!: number;

  onRatingSet(rating: number): void {
    this.ratingDisplay = rating;
  }

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  NgxStarratingDisplay!: number;
  NgxonRatingSet(rating: number): void {
    this.NgxStarratingDisplay = rating;
  }
}
