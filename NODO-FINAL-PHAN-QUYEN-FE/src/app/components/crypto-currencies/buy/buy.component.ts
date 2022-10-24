import { Component, OnInit } from '@angular/core';
import * as ApexChartData from 'src/app/shared/data/cryptocurrencies/crypto';

interface BuySellType {
  id?: number;
  arrow: string;
  arrowStatus: string;
  date: string;
  amount: string;
  remaining: string;
  price: string;
  usd: string;
  statusText: string;
  status: string;
}

const  BuySellData: BuySellType[] = [
  {id: 1001, arrow: 'up', arrowStatus:'success', date: '31-05-2021', amount:'0.37218', remaining:'0.42173', price:'52681.13', usd:'$ 5273.15', statusText:'Completed', status:'success'},
  {id: 1002, arrow: 'down', arrowStatus:'danger', date: '02-06-2021', amount:'1.47364', remaining:'0.36472', price:'73647.15', usd:'$ 2637.37', statusText:'Pending', status:'warning'},
  {id: 1003, arrow: 'down', arrowStatus:'danger', date: '05-06-2021', amount:'0.63736', remaining:'0.73748', price:'72637.02', usd:'$ 6345.16 ', statusText:'Cancelled', status:'danger'},
  {id: 1004, arrow: 'up', arrowStatus:'success', date: '15-07-2021', amount:'0.63647', remaining:'0.83643', price:'83748.19', usd:'$ 23836.09', statusText:'Completed', status:'success'},
  {id: 1005, arrow: 'up', arrowStatus:'success', date: '22-07-2021', amount:'0.76263', remaining:'0.72563', price:'32635.32', usd:'$ 7235.25', statusText:'Completed', status:'success'},
  {id: 1006, arrow: 'down', arrowStatus:'danger', date: '30-07-2021', amount:'0.46263', remaining:'0.27363', price:'28937.22', usd:'$ 4853.15', statusText:'In Process', status:'info'},
  {id: 1007, arrow: 'up', arrowStatus:'success', date: '31-05-2021', amount:'0.37218', remaining:'0.42173', price:'52681.13', usd:'$ 5273.15', statusText:'Completed', status:'success'},
  {id: 1008, arrow: 'down', arrowStatus:'danger', date: '02-06-2021', amount:'1.47364', remaining:'0.36472', price:'73647.15', usd:'$ 2637.37', statusText:'Pending', status:'warning'},
  {id: 1009, arrow: 'down', arrowStatus:'danger', date: '05-06-2021', amount:'0.63736', remaining:'0.73748', price:'72637.02', usd:'$ 2637.37', statusText:'Cancelled', status:'danger'},
  {id: 1010, arrow: 'up', arrowStatus:'success', date: '15-07-2021', amount:'0.63647', remaining:'0.83643', price:'83748.19', usd:'$ 23836.09', statusText:'Completed', status:'success'},
  {id: 1011, arrow: 'up', arrowStatus:'success', date: '22-07-2021', amount:'0.76263', remaining:'0.72563', price:'32635.32', usd:'$ 7235.25', statusText:'Completed', status:'success'},
]


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = BuySellData.length;
  BuySellList!: BuySellType[];

  constructor() {
    this.refreshBuySell();
   }

  ngOnInit(): void {
  }
  refreshBuySell() {
    this.BuySellList = BuySellData
      .map((recent, i) => ({...recent}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  public lineChartOptions = ApexChartData.lineChartOptions;
  public lineChartLabels = ApexChartData.lineChartData.datasets;
  public lineChartOptions1 = ApexChartData.lineChartOptions1;
  public lineChartLegend = ApexChartData.lineChartLegend;
  public lineChartData = ApexChartData.lineChartData;
}
