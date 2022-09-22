import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page = 3;
  isDisabled = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
