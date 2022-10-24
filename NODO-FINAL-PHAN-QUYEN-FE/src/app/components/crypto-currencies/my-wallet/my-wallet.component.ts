import { Component, OnInit } from '@angular/core';

interface WalletType {
  id?: number;
  arrow: string;
  arrowStatus: string;
  date: string;
  from:string;
  to: string;
  toImg: string;
  coin: string;
  coinImg: string;
  amount: string;
  statusText: string;
  status: string;
}

const  WalletData: WalletType[] = [
  {id: 1001, arrow: 'up', arrowStatus:'success', date: '03/12/2021', from:'toImg', to:'Peg Legge', toImg:'./assets/img/users/2.jpg', coin:'Bitcoin', coinImg:'./assets/img/svgs/crypto-currencies/btc.svg', amount:'+0.041', statusText:'Completed', status:'success'},
  {id: 1002, arrow: 'down', arrowStatus:'danger', date: '05/12/2021', from:'Addie Minstra', to:'Art Decco', toImg:'./assets/img/users/3.jpg', coin:'Ethereum', coinImg:'./assets/img/svgs/crypto-currencies/eth.svg', amount:'-0.344', statusText:'Cancelled', status:'danger'},
  {id: 1003, arrow: 'down', arrowStatus:'danger', date: '14/12/2021', from:'Stan Dupp', to:'Neil Down', toImg:'./assets/img/users/4.jpg', coin:'Ripple', coinImg:'./assets/img/svgs/crypto-currencies/xrp.svg', amount:'-0.345',  statusText:'Pending', status:'warning'},
  {id: 1004, arrow: 'up', arrowStatus:'success', date: '16/12/2021', from:'Black', to:'Anna Domino', toImg:'./assets/img/users/5.jpg', coin:'Dash', coinImg:'./assets/img/svgs/crypto-currencies/dash.svg', amount:'+0.132', statusText:'Completed', status:'success'},
  {id: 1005, arrow: 'down', arrowStatus:'danger', date: '18/12/2021', from:'Phil Harmonic', to:'Paul Misunday', toImg:'./assets/img/users/6.jpg', coin:'Gifto', coinImg:'./assets/img/svgs/crypto-currencies/gto.svg', amount:'-0.523', statusText:'Cancelled', status:'danger'},
  {id: 1006, arrow: 'down', arrowStatus:'danger', date: '20/12/2021', from:'Arty Ficial', to:'Marsha Mello  ', toImg:'./assets/img/users/7.jpg', coin:'Monero', coinImg:'./assets/img/svgs/crypto-currencies/xmr.svg', amount:'-0.232', statusText:'Pending', status:'warning'},
  {id: 1007, arrow: 'up', arrowStatus:'success', date: '22/12/2021', from:'Donatella Nobatti', to:'Peg Legge', toImg:'./assets/img/users/8.jpg', coin:'Steem', coinImg:'./assets/img/svgs/crypto-currencies/steem.svg', amount:'+0.456', statusText:'Completed', status:'success'},
  {id: 1008, arrow: 'up', arrowStatus:'success', date: '25/12/2021', from:'Juan Annatoo', to:'Jack Dup', toImg:'./assets/img/users/9.jpg', coin:'Iota', coinImg:'./assets/img/svgs/crypto-currencies/miota.svg', amount:'+0.232', statusText:'Completed  ', status:'success'},
  {id: 1009, arrow: 'down', arrowStatus:'danger', date: '25/12/2021', from:'Stew Gots', to:'Sara Bellum ', toImg:'./assets/img/users/10.jpg', coin:'Waves', coinImg:'./assets/img/svgs/crypto-currencies/waves.svg', amount:'-0.232', statusText:'Pending', status:'warning'},
  {id: 1010, arrow: 'down', arrowStatus:'danger', date: '28/12/2021', from:'Anna Rexia', to:'Marge Arita', toImg:'./assets/img/users/11.jpg', coin:'Neo', coinImg:'./assets/img/svgs/crypto-currencies/neo.svg', amount:'-0.344', statusText:'Cancelled', status:'danger'},
  {id: 1011, arrow: 'down', arrowStatus:'danger', date: '29/12/2021', from:'Matt Innae', to:'Barry Cuda', toImg:'./assets/img/users/12.jpg', coin:'Eos', coinImg:'./assets/img/svgs/crypto-currencies/eos.svg', amount:'-0.231', statusText:'Cancelled', status:'danger'},
  {id: 1012, arrow: 'up', arrowStatus:'success', date: '30/12/2021', from:'Gabe Lackmen', to:'Marion Gaze', toImg:'./assets/img/users/1.jpg', coin:'Euros', coinImg:'./assets/img/svgs/crypto-currencies/eur.svg', amount:'+0.124', statusText:'Completed', status:'success'},
  {id: 1013, arrow: 'down', arrowStatus:'danger', date: '31/12/2021', from:'Jim Nasium', to:'Marcus Down', toImg:'./assets/img/users/2.jpg', coin:'Bitcoin', coinImg:'./assets/img/svgs/crypto-currencies/btc.svg', amount:'-0.241', statusText:'Pending', status:'warning'},
  {id: 1014, arrow: 'up', arrowStatus:'success', date: '02/01/2021', from:'Ella Vator', to:'Gene Jacket', toImg:'./assets/img/users/3.jpg', coin:'Ethereum', coinImg:'./assets/img/svgs/crypto-currencies/eth.svg', amount:'+0.134', statusText:'Completed', status:'success'},
  {id: 1015, arrow: 'down', arrowStatus:'danger', date: '04/01/2021', from:'Bart Ender', to:'Marty Graw', toImg:'./assets/img/users/4.jpg', coin:'Ripple', coinImg:'./assets/img/svgs/crypto-currencies/xrp.svg', amount:'-0.244', statusText:'Pending', status:'warning'},
]

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = WalletData.length;
  WalletList!: WalletType[];

  constructor() {
    this.refreshWallet();
   }

  ngOnInit(): void {
  }
  refreshWallet() {
    this.WalletList = WalletData
      .map((recent, i) => ({...recent}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
