import { Component, OnInit } from '@angular/core';


interface WishlistType {
  id?: number;
  img: string;
  title: string;
  oldValue: string;
  newValue: string;
  description: string;
  rating: number;
  ratingValue: number;
}

const WishlistData: WishlistType[] = [
  {id: 1, img:'./assets/img/pngs/01.png', title:"Men's Shoes", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 25},
  {id: 2, img:'./assets/img/pngs/02.png', title:"Hand Bag", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 3, img:'./assets/img/pngs/03.png', title:"Wrist Watch", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 22},
  {id: 4, img:'./assets/img/pngs/04.png', title:"Long Frock", oldValue: '$32.00', newValue: '$22.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 20},
  {id: 5, img:'./assets/img/pngs/05.png', title:"Girls Sandals", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 6, img:'./assets/img/pngs/06.png', title:"Sofa Chair", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 22},
  {id: 7, img:'./assets/img/pngs/07.png', title:"Laptop", oldValue: '$200.00', newValue: '$149.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 19},
  {id: 8, img:'./assets/img/pngs/08.png', title:"Soft Toy", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 25},
  {id: 9, img:'./assets/img/pngs/09.png', title:"Smart Phone", oldValue: '$49.00', newValue: '$39.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 4 , ratingValue: 14},
  {id: 10, img:'./assets/img/pngs/010.png', title:"Girls Skirt", oldValue: '$30.00', newValue: '$21.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 25},
  {id: 11, img:'./assets/img/pngs/011.png', title:"Fashion Ring", oldValue: '$29.00', newValue: '$15.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 22},
  {id: 12, img:'./assets/img/pngs/012.png', title:"Sunglasses", oldValue: '$32.00', newValue: '$22.00', description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum quia.', rating: 3 , ratingValue: 32},
]

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistList!: WishlistType[];
  constructor() { }

  ngOnInit(): void {
    this.wishlistList = WishlistData
  }

}
