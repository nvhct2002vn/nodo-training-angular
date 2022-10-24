import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoCurrenciesRoutingModule } from './crypto-currencies-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponent } from './buy/buy.component';
import { MarketCapitalComponent } from './market-capital/market-capital.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    BuyComponent,
    MarketCapitalComponent,
    MyWalletComponent,
    CurrencyExchangeComponent
  ],
  imports: [
    CommonModule,
    CryptoCurrenciesRoutingModule,
    NgbModule, 
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgSelectModule,
    NgApexchartsModule, 
    NgChartsModule
  ]
})
export class CryptoCurrenciesModule { }
