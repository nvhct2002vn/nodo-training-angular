import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { NgxNotifierService } from 'ngx-notifier';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  durationInSeconds = 5;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _notifications: NotificationsService,
    private _fb: FormBuilder,
    private ngxNotifierService: NgxNotifierService, private _snackBar: MatSnackBar
  ) { }

  form!: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  ngOnInit() {
		this.form = this._fb.group({
			type: 'success',
			title: 'This is just a title',
			content: 'This is just some content',
			timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'fromRight'
		});
	}

	create() {

		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content, type, temp)
	}

  /** crates a toast message */
  createToast(style: string): void {
    this.ngxNotifierService.createToast( style ,style, 5000000);
    return;
  }

  /** clears all toast messages */
  clearToasts(): void {
    this.ngxNotifierService.clear();
  }

  /** clear last toast notification */
  clearLastToast(): void {
    this.ngxNotifierService.clearLast();
  }


  openSnackBarCustom() {
    this._snackBar.openFromComponent(BasciSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  openSnackBarBasic(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration : this.durationInSeconds * 1000,
    });
  }

  openSnackBar() {
    this._snackBar.open(`Snackbar position ${this.horizontalPosition}-${this.verticalPosition} `, 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration : this.durationInSeconds * 1000,      
    });
  }
}



@Component({
  selector: 'snack-bar-component',
  template: `<span class="basicSnackbar">
              Basic Snackbar Notification
            </span>`,
  styles: [`
    .basicSnackbar {
      color: hotpink;
    }
  `],
})
export class BasciSnackbarComponent {}