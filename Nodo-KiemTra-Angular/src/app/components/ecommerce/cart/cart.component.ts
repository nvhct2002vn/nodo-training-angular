import { Component, OnInit } from '@angular/core';

interface cart{
  id: number;
  image: string;
  color: string;
  title: string;
  quantity: number;
  price: string;
  status: string;
  statusText: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  objectArray: cart[];
  constructor() { 
    this.objectArray = [
      { id: 1, image: "./assets/img/pngs/14.png", color:'Pink', title : "SANDALS", price : "$26.00", statusText:'danger', status :'Out of stock', quantity: 1},
      { id: 2, image: "./assets/img/pngs/15.png", color:'Blue', title : "BACKPACK", price : "$23.00", statusText:'success', status : 'In stock', quantity: 2},
      { id: 4, image: "./assets/img/pngs/19.png", color:'Blue', title : "GIRLS FROCK", price : "$38.00", statusText:'danger', status : 'Out of stock', quantity: 1},
      { id: 5, image: "./assets/img/pngs/16.png", color:'Red', title : "T SHIRT", price : "$56.00", statusText:'success', status : 'In stock', quantity: 1},
      { id: 6, image: "./assets/img/pngs/17.png", color:'Yellow', title : "WRIST WATCH", price : "$24.00", statusText:'success', status : 'In stock', quantity: 3},
      { id: 6, image: "./assets/img/pngs/18.png", color:'Green', title : "SOFA CHAIR", price : "$34.00", statusText:'danger', status : 'Out of stock', quantity: 3},
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(){
    const plus:any = document.querySelectorAll('.plus');
    const minus:any = document.querySelectorAll('.minus');
    function perfectChart(){
      plus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
            parentDiv.children[0].children[1].value++            
          })
      } )
      minus.forEach( (element:any)=>{
        let parentDiv = element.parentElement.parentElement;
          element.addEventListener('click',()=>{
             if(parentDiv.children[0].children[1].value  > 0){
              parentDiv.children[0].children[1].value-- 
             }
          })
      } )
    }
    perfectChart()
  }
  RemoveElementFromObjectArray(key: any) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  }
}
