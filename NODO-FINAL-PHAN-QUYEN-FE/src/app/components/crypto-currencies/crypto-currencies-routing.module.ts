import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketCapitalComponent } from './market-capital/market-capital.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'buy',
        component: BuyComponent
      },
      {
        path: 'currency-exchange',
        component: CurrencyExchangeComponent
      },
      {
        path: 'market-captial',
        component: MarketCapitalComponent
      },
      {
        path: 'my-wallet',
        component: MyWalletComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrenciesRoutingModule { }
