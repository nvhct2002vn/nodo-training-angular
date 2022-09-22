import { Component, OnInit } from '@angular/core';
import { chartOptions } from 'src/app/shared/data/dashboard/dashboard02';


export interface RecentType {
  id?: number;
  name?: string;
  imgStatus?: boolean;
  img?: string;
  imgText?: string;
  imgBg?: string;
  orderId?: string;
  date?: string;
  price?: string;
  stauts?: string;
  stautsText?: string;
  country?: string
}


const RecentData: RecentType[] = [
  {id:1, name:'Andrea Sun',imgStatus:true, img:'./assets/img/users/1.jpg', orderId:'#10001', date:'01 MAR 2021', price:'$146', stauts:'success', stautsText:'Delivered', country:'Australia'},
  {id:2, name:'Ben Shall',imgStatus:true, img:'./assets/img/users/2.jpg', orderId:'#10002', date:'02 MAR 2021', price:'$179', stauts:'success', stautsText:'Delivered', country:'Australia'},
  {id:3, name:'Cinel Toa',imgStatus:false, imgBg: 'info',imgText:'CT', orderId:'#10003', date:'03 MAR 2021', price:'$188', stauts:'success', stautsText:'Delivered', country:'Canada'},
  {id:4, name:'Dia Mark',imgStatus:true, img:'./assets/img/users/4.jpg', orderId:'#10004', date:'04 MAR 2021', price:'$193', stauts:'success', stautsText:'Delivered', country:'Denmark'},
  {id:5, name:'Eutica Ria',imgStatus:false, imgBg: 'success',imgText:'ER', orderId:'#10005', date:'05 MAR 2021', price:'$209', stauts:'success', stautsText:'Delivered', country:'France'},
  {id:6, name:'Frano Rit',imgStatus:true, img:'./assets/img/users/6.jpg', orderId:'#10006', date:'06 MAR 2021', price:'$218', stauts:'warning', stautsText:'Pending', country:'Iran'},
  {id:7, name:'Goldie Mat',imgStatus:true, img:'./assets/img/users/7.jpg', orderId:'#10007', date:'07 MAR 2021', price:'$227', stauts:'success', stautsText:'Delivered', country:'London'},
  {id:8, name:'Henry Dia',imgStatus:false, imgBg: 'danger',imgText:'HD', orderId:'#10008', date:'08 MAR 2021', price:'$234', stauts:'success', stautsText:'Delivered', country:'Malasia'},
  {id:9, name:'Hustro Mark',imgStatus:true, img:'./assets/img/users/9.jpg', orderId:'#10009', date:'09 MAR 2021', price:'$246', stauts:'danger', stautsText:'Cancelled', country:'Malasia'},
  {id:10, name:'Jack Fince',imgStatus:true, img:'./assets/img/users/10.jpg', orderId:'#10010', date:'10 MAR 2021', price:'$253', stauts:'success', stautsText:'Delivered', country:'Russia'},
  {id:11, name:'Kanae Tom',imgStatus:true, img:'./assets/img/users/11.jpg', orderId:'#10011', date:'11 MAR 2021', price:'$260', stauts:'success', stautsText:'Delivered', country:'Sweden'},
  {id:12, name:'Luci Dia',imgStatus:false, imgBg: 'secondary',imgText:'LD', orderId:'#10012', date:'12 MAR 2021', price:'$268', stauts:'warning', stautsText:'Pending', country:'Sweden'},
  {id:13, name:'Mercy Rico',imgStatus:true, img:'./assets/img/users/3.jpg', orderId:'#10013', date:'13 MAR 2021', price:'$275', stauts:'success', stautsText:'Delivered', country:'Brazil'},
  {id:14, name:'Niccy Ricco',imgStatus:false, imgBg: 'warning',imgText:'NR', orderId:'#10014', date:'14 MAR 2021', price:'$286', stauts:'success', stautsText:'Delivered', country:'UK'},
  {id:15, name:'Vashti Faw',imgStatus:true, img:'./assets/img/users/5.jpg', orderId:'#10015', date:'15 MAR 2021', price:'$289', stauts:'danger', stautsText:'Cancelled', country:'USA'},
]

@Component({
  selector: 'app-dashboard02',
  templateUrl: './dashboard02.component.html',
  styleUrls: ['./dashboard02.component.scss']
})
export class Dashboard02Component implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize = RecentData.length;
  RecentList!: RecentType[];

  constructor() {
    this.refreshCountries();
   }

  ngOnInit(): void {
  }
  refreshCountries() {
    this.RecentList = RecentData
      .map((recent, i) => ({...recent}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  public chartOptions = chartOptions
}

