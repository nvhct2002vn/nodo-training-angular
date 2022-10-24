import { Component, OnInit } from '@angular/core';

interface ShopType {
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

const ShopData: ShopType[] = [
  {id: 1, badgeStatus: true, badge: 'success', badgeText: 'In Stock', img:'./assets/img/pngs/01.png', title:"Men's Shoes", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 25},
  {id: 2, badgeStatus: false, badge: 'info', badgeText: '-30%', img:'./assets/img/pngs/02.png', title:"Hand Bag", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 3, badgeStatus: true, badge: 'danger', badgeText: 'No Stock', img:'./assets/img/pngs/03.png', title:"Wrist Watch", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 22},
  {id: 4, badgeStatus: false, badge: 'success', badgeText: '-50%', img:'./assets/img/pngs/04.png', title:"Long Frock", oldValue: '$32.00', newValue: '$22.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 20},
  {id: 5, badgeStatus: false, badge: 'warning', badgeText: '-20%', img:'./assets/img/pngs/05.png', title:"Girls Sandals", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 6, badgeStatus: true, badge: 'secondary', badgeText: 'New', img:'./assets/img/pngs/06.png', title:"Sofa Chair", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 22},
  {id: 7, badgeStatus: false, badge: 'primary', badgeText: '-10%', img:'./assets/img/pngs/07.png', title:"Laptop", oldValue: '$200.00', newValue: '$149.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 19},
  {id: 8, badgeStatus: true, badge: 'info', badgeText: 'Best Deal', img:'./assets/img/pngs/08.png', title:"Soft Toy", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 25},
  {id: 9, badgeStatus: true, badge: 'success', badgeText: 'In Stock', img:'./assets/img/pngs/09.png', title:"Smart Phone", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 10, badgeStatus: false, badge: 'info', badgeText: '-30%', img:'./assets/img/pngs/010.png', title:"Girls Skirt", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 25},
  {id: 11, badgeStatus: true, badge: 'success', badgeText: 'In Stock', img:'./assets/img/pngs/011.png', title:"Fashion Ring", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 22},
  {id: 12, badgeStatus: false, badge: 'secondary', badgeText: '-50%', img:'./assets/img/pngs/012.png', title:"Sunglasses", oldValue: '$32.00', newValue: '$22.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 32},
]
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shopList!: ShopType[];
  constructor() { }

  ngOnInit(): void {
    this.shopList = ShopData
  }

}
