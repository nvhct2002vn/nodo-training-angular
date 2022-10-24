import { Component, OnInit } from '@angular/core';
import { lineChartData1, lineChartData2, lineChartData3, lineChartData4, lineChartData5, lineChartData6, lineChartData7, lineChartData8, lineChartOptions, lineChartType } from 'src/app/shared/data/cryptocurrencies/crypto-exchange';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public lineChartOptions = lineChartOptions;
  public lineChartType = lineChartType
  public lineChartData1 = lineChartData1;
  public lineChartData2 = lineChartData2;
  public lineChartData3 = lineChartData3;
  public lineChartData4 = lineChartData4;
  public lineChartData5 = lineChartData5;
  public lineChartData6 = lineChartData6;
  public lineChartData7 = lineChartData7;
  public lineChartData8 = lineChartData8;
}
