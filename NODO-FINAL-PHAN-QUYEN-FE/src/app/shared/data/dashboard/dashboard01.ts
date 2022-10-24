import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";
export type ChartOptions = {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    chart: ApexChart;
    labels?:any;
    dataLabels: ApexDataLabels;
    plotOptions?: ApexPlotOptions | any;
    yaxis?: ApexYAxis | any;
    xaxis?: ApexXAxis | any;
    fill?: ApexFill | any;
    tooltip?: ApexTooltip | any;
    colors?:any;
    stroke?: ApexStroke | any;
    legend?: ApexLegend | any;
    markers?: ApexMarkers | any;
    grid? : ApexGrid | any;
    responsive?: ApexResponsive[] | any;
  };
  
  export let chartOptions: ChartOptions = {
    series: [
      {
        name: 'Sales',
        data: [27, 16, 27, 22, 14, 18, 27, 21, 14, 27, 20, 27],
        color: '#4d65d9',
      },
      {
        name: 'Profits',
        data: [44, 24, 39, 30, 31, 32, 39, 28, 24, 39, 31, 39],
        color: '#9fa8e0',
      },
    ],
    chart: {
      type: 'bar',
      height: 250,
      stacked: true,
    },
    legend: {
      position: "top",
    },
    plotOptions: {
      maintainAspectRatio: false,
			responsive: true,

      bar: {
        horizontal: false,
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      
    },
    yaxis: {
      // title: {
      //   text: "$ (thousands)"
      // }
    },
    tooltip: {
      enabled: false,
    },
    grid:{
    }
  };
  
  export let  donut:ChartOptions = {
    series: [15, 42, 20, 23],
      chart: {
        width: 380,
        type: "donut",
        
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true
              }
            }
          }
        }
      },
      labels: ["clients", "sales", "shares", "profits"],
      dataLabels: {
        enabled: false
      },
      colors: ["#7886d3", "#4d65d9","#d8dcf3","#9fa8e0"],
      legend: {
        position: 'bottom'
      },
  }