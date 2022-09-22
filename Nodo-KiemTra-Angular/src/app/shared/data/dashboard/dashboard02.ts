import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  labels?: any;
  dataLabels: ApexDataLabels;
  plotOptions?: ApexPlotOptions | any;
  yaxis?: ApexYAxis | any;
  xaxis?: ApexXAxis | any;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
  stroke?: ApexStroke | any;
  colors: any;
  legend?: ApexLegend | any;
  markers?: ApexMarkers | any;
  grid?: ApexGrid | any;
  responsive?: ApexResponsive[] | any;
};

export let chartOptions: ChartOptions = {
  series: [{
    name: 'Net Profit',
    type: 'column',
    data: [22, 34, 56, 37, 35, 21, 34, 60, 78, 56, 53, 89],
  }, {
    name: 'Sales',
    type: 'column',
    data: [42, 50, 70, 57, 55, 58, 43, 80, 54, 23, 34, 77],
  }, {
    name: 'Total',
    type: 'line',
    data: [25, 36, 58, 39, 38, 25, 37, 62, 56, 25, 37, 79],
    
  }],
  chart: {
    height: 300,
    foreColor: 'rgba(142, 156, 173, 0.9)',
    type: 'line',
  },
  grid: {
    borderColor: 'transparent',
  },
  colors: [ "#4d65d9", "#d7d7d9", "#e4e7ed"],
  plotOptions: {
    bar: {
      endingShape: 'rounded',
      horizontal: false,
      columnWidth: '0%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'top',
    labels: {
      color: 'rgba(142, 156, 173, 0.9)'
    },
    fontFamily: 'Hind Siliguri',
  },
  stroke: {
    width: [0, 2, 4],
  },
  yaxis: {
    title: {
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'Hind Siliguri',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
    labels: {
      rotate: -90,
      style: {
        fontFamily: 'Hind Siliguri',
        cssClass: 'summaryyaxis',
      }
    }
  },
  xaxis: {
    type: 'month',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90,
      style: {
        fontFamily: 'Hind Siliguri',
        cssClass: 'summaryxaxis',
      }
    }
  },
  markers: {
    size: 0
  }
};
