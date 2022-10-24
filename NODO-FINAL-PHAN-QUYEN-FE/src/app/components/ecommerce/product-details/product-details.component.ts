import { Component, OnInit } from '@angular/core';

interface ProductDetailsType {
  id?: number;
  badgeStatus: boolean;
  badge?: string;
  badgeText?: string;
  img: string;
  title: string;
  oldValue: string;
  newValue: string;
  description: string;
  rating: number;
  ratingValue: number;
}

const ProductDetailsData: ProductDetailsType[] = [
  {id: 1, badgeStatus: true, badge: 'success', badgeText: 'In Stock', img:'./assets/img/pngs/09.png', title:"Smart Phone", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 2, badgeStatus: false, badge: 'info', badgeText: '-30%', img:'./assets/img/pngs/010.png', title:"Girls Skirt", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 25},
  {id: 3, badgeStatus: true, badge: 'success', badgeText: 'In Stock', img:'./assets/img/pngs/011.png', title:"Fashion Ring", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 22},
  {id: 4, badgeStatus: false, badge: 'secondary', badgeText: '-50%', img:'./assets/img/pngs/012.png', title:"Sunglasses", oldValue: '$32.00', newValue: '$22.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 32},
]

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ProductDetailsList!: ProductDetailsType[];
  constructor() { }

  ngOnInit(): void {
    this.ProductDetailsList = ProductDetailsData
    
      const plus:any = document.querySelectorAll('.plus');
      const minus:any = document.querySelectorAll('.minus');
      function perfectChart(){
        plus.forEach( (element:any)=>{
          let parentDiv = element.parentElement;
            element.addEventListener('click',()=>{
              parentDiv.children[1].value++;
            })
        } )
        minus.forEach( (element:any)=>{
          let parentDiv = element.parentElement;
            element.addEventListener('click',()=>{              
               if(parentDiv.children[1].value  > 0){
                parentDiv.children[1].value--;
               }
            })
        } )
      }
      perfectChart()
    }

}
