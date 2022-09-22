import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'add-products',
        component: AddProductsComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
