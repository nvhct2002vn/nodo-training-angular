import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-draggable-cards',
  templateUrl: './draggable-cards.component.html',
  styleUrls: ['./draggable-cards.component.scss']
})
export class DraggableCardsComponent implements OnInit {

  BAG = "DRAGULA_EVENTS";
  subs = new Subscription();
  public constructor(private dragulaService: DragulaService) {
    this.subs.add(dragulaService.drag(this.BAG)
      .subscribe(({ el }) => {
        // this.removeClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.drop(this.BAG)
      .subscribe(({ el }) => {
        // this.addClass(el, 'ex-moved');
      })
    );
    this.subs.add(dragulaService.over(this.BAG)
      .subscribe(({ el, container }) => {
        // console.log('over', container);
        // this.addClass(container, 'ex-over');
      })
    );
    this.subs.add(dragulaService.out(this.BAG)
      .subscribe(({ el, container }) => {
        // console.log('out', container);
        // this.removeClass(container, 'ex-over');
      })
    );
  }
  ngOnInit(): void {
      
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  addClass(el: any, classes: string) {  }
  removeClass(ele: any, classes: string) {  }
}
