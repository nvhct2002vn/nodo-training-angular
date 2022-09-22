import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast-service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  show = true;
  show1 = true;
  show2 = true;
  show3 = true;
  show4 = true;
  show5 = true;
  show6 = true;
  show7 = true;
  show8 = false;
  show9 = true;
  show10 = true;
  autohide = true;
  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }
  showMessage(msg: any) {
    this.toastService.show(msg, { delay: 15000 });
  }


  close() {
    this.show1 = false;
    setTimeout(() => this.show1 = true, 3000);
  }
}


