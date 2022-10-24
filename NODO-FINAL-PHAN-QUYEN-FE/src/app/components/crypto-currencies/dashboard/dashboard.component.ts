import { Component, OnInit } from '@angular/core';
import { crypto, Sparkline } from 'src/app/shared/data/cryptocurrencies/crypto';


interface CryptoDahboardType {
  id?: number;
  img: string;
  name: string;
  date: string;
  time : string;
  amount: string;
  amountStatus: string;
  statusText: string;
  status: string;
}

const  CryptoDahboardData: CryptoDahboardType[] = [
  {id: 1, img:'./assets/img/svgs/crypto-currencies/btc.svg', name:'Bitcoin', date:'01 MAR 2021', time: '05:12:16', amount:'+0,041 BTC', amountStatus:'success', statusText: 'Completed', status:'success'},
  {id: 2, img:'./assets/img/svgs/crypto-currencies/eth.svg', name:'Ethereum', date:'02 MAR 2021', time: '12:19:25', amount:'-0.00215 ETH', amountStatus:'danger', statusText: 'Pending', status:'warning'},
  {id: 3, img:'./assets/img/svgs/crypto-currencies/xrp.svg', name:'Ripple', date:'03 MAR 2021', time: '10:23:42', amount:'	+12.856 XRP', amountStatus:'success', statusText: 'Cancelled', status:'danger'},
  {id: 4, img:'./assets/img/svgs/crypto-currencies/dash.svg', name:'Dash', date:'04 MAR 2021', time: '02:01:15', amount:'	+0,1535 DAH', amountStatus:'success', statusText: 'Pending', status:'warning'},
  {id: 5, img:'./assets/img/svgs/crypto-currencies/bcn.svg', name:'Bcn', date:'05 MAR 2021', time: '07:16:25', amount:'11,85 Bcn', amountStatus:'info', statusText: 'Exchanged', status:'info'},
  {id: 6, img:'./assets/img/svgs/crypto-currencies/mcap.svg', name:'Monero', date:'06 MAR 2021', time: '01:34:17', amount:'-0,0445 BTC', amountStatus:'danger', statusText: 'Completed', status:'success'},
  {id: 7, img:'./assets/img/svgs/crypto-currencies/neo.svg', name:'NEM', date:'07 MAR 2021', time: '08:45:32', amount:'+0,352 NEM', amountStatus:'success', statusText: 'Completed', status:'success'},
  {id: 8, img:'./assets/img/svgs/crypto-currencies/act.svg', name:'ACT', date:'08 MAR 2021', time: '05:12:16', amount:'+0,041 ACT', amountStatus:'success', statusText: 'Completed', status:'success'},
  {id: 9, img:'./assets/img/svgs/crypto-currencies/arn.svg', name:'ARN', date:'09 MAR 2021', time: '12:19:25', amount:'-0.00215 ARN', amountStatus:'danger', statusText: 'Pending', status:'warning'},
  {id: 10, img:'./assets/img/svgs/crypto-currencies/bpt.svg', name:'BPT', date:'10 MAR 2021', time: '10:23:42', amount:'+12.856 BPT', amountStatus:'success', statusText: 'Cancelled', status:'danger'},
  {id: 11, img:'./assets/img/svgs/crypto-currencies/ethos.svg', name:'ETHOS', date:'11 MAR 2021', time: '02:01:15', amount:'+0,1535 ETHOS', amountStatus:'success', statusText: 'Pending', status:'warning'},
  {id: 12, img:'./assets/img/svgs/crypto-currencies/eur.svg', name:'EUR', date:'12 MAR 2021', time: '07:16:25', amount:'	11,85 EUR', amountStatus:'info', statusText: 'Exchanged', status:'info'},
  {id: 13, img:'./assets/img/svgs/crypto-currencies/grc.svg', name:'GRC', date:'13 MAR 2021', time: '01:34:17', amount:'-0,0445 GRC', amountStatus:'danger', statusText: 'Completed', status:'success'},
  {id: 14, img:'./assets/img/svgs/crypto-currencies/iop.svg', name:'IOP', date:'14 MAR 2021', time: '08:45:32', amount:'+0,352 IOP', amountStatus:'success', statusText: 'Completed', status:'success'},
  {id: 15, img:'./assets/img/svgs/crypto-currencies/nmc.svg', name:'NMC', date:'15 MAR 2021', time: '10:23:42', amount:'+12.856 NMC', amountStatus:'success', statusText: 'Cancelled', status:'danger'},
]

declare global {
  interface Window {
    Apex: any;
  }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = CryptoDahboardData.length;
  CryptoDahboardList!: CryptoDahboardType[];

  constructor() {
    this.refreshCryptoDahboard();
   }

  ngOnInit(): void {}
  refreshCryptoDahboard() {
    this.CryptoDahboardList = CryptoDahboardData
      .map((recent, i) => ({...recent}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  public crypto = crypto
  public Sparkline = Sparkline
}
