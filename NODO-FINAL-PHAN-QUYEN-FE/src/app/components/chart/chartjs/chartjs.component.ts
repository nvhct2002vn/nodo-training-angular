import { Component, OnInit } from '@angular/core';
import { ChartEvent } from 'ng-chartist';
import * as chartData from '../../../shared/data/chart/chartjs';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { enUS } from 'date-fns/locale';
import 'chartjs-adapter-moment'
import { add, parseISO } from 'date-fns';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

 //Line Chart
 public lineChartOptions = chartData.lineChartOptions
 public lineChartData = chartData.lineChartData
 public lineChartType = chartData.lineChartType

 //Line Chart
 public MultipleChartOptions = chartData.multipleChartOptions
 public MultipleChartData = chartData.multipleChartData
 public MultipleChartType = chartData.multipleChartType
 // events
 public chartClicked({ event, active }: { event?: ChartEvent | any, active?: {}[] }): void {
   // console.log(event, active);
 }

 public chartHovered({ event, active }: { event?: ChartEvent | any, active?: {}[] }): void {
   // console.log(event, active);
 }

 // Bar Chart 1
 public barChartOptions = chartData.barChartOptions;
 public barChartData = chartData.barChartData;
 public barChartType = chartData.barChartType;
 public barChartPlugins = chartData.barChartPlugins;
 
 // //Doughnut and Pie Chart Data
 public doughnutChartLabels = chartData.doughnutChartLabels;
 public doughnutChartData = chartData.doughnutChartData;
 public doughnutChartType = chartData.doughnutChartType;

 public pieChartData = chartData.pieChartData;
 public pieChartType = chartData.pieChartType;
 public pieChartOptions = chartData.pieChartOptions;
 public pieChartPlugins = chartData.pieChartPlugins;
 
 // //Radar Chart
 public radarChartData = chartData.radarChartData;
 public radarChartOptions = chartData.radarChartOptions;
 public radarChartType = chartData.radarChartType;

 // //Polar Chart
 public polarAreaChartData = chartData.polarAreaChartData;
 public polarAreaLegend = chartData.polarAreaLegend;
 public polarAreaChartType = chartData.polarAreaChartType;
 
 barCount = 60;
 initialDateStr = '2017-04-01T00:00:00';

 public financialChartData: ChartConfiguration['data'] = {
   datasets: [ {
     label: 'CHRT - Chart.js Corporation',
     data: this.getRandomData(this.initialDateStr, this.barCount)
   } ]
 };

 public financialChartOptions: ChartConfiguration['options'] = {
   responsive: true,
   maintainAspectRatio: false,
   scales: {
     x: {
       time: {
         unit: 'day'
       },
       adapters: {
         date: {
           locale: enUS
         }
       },
       ticks: {
         source: 'auto'
       }
     }
   }
 };
 public financialChartColors = [
   {
     borderColor: 'black',
     backgroundColor: 'rgba(255,0,0,0.3)',
   },
 ];

 public financialChartLegend = true;
 public financialChartType: ChartType = 'candlestick';
 public financialChartPlugins = [];

 constructor() {
   Chart.register(CandlestickController, OhlcController, CandlestickElement, OhlcElement);
 }

 randomNumber(min: number, max: number): number {
   return Math.random() * (max - min) + min;
 }

 randomBar(date: Date, lastClose: number): { c: number; x: number; h: number; l: number; o: number } {
   const open = this.randomNumber(lastClose * 0.95, lastClose * 1.05);
   const close = this.randomNumber(open * 0.95, open * 1.05);
   const high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
   const low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close));
   return {
     x: +date,
     o: open,
     h: high,
     l: low,
     c: close
   };
 }

 getRandomData(dateStr: string, count: number): { c: number; x: number; h: number; l: number; o: number }[] {
   let date = parseISO(dateStr);
   const data = [ this.randomBar(date, 30) ];
   while (data.length < count) {
     date = add(date, { days: 1 });
     if (date.getDay() <= 5) {
       data.push(this.randomBar(date, data[data.length - 1].c));
     }
   }
   return data;
 }

 update(): void {
   // candlestick vs ohlc
   this.financialChartType = this.financialChartType === 'candlestick' ? 'ohlc' : 'candlestick';
 }

 ngOnInit(): void {
 } 

}
