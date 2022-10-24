import { ChartConfiguration, ChartType } from 'chart.js';

export let lineChartOptions: ChartConfiguration['options'] = {
  // title: {
  //   display: false,
  // },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        color: 'transparent',
        borderColor: 'transparent',
      },
      ticks: {
        // fontSize: 2,
        color: 'transparent',
      },
    },
    y: {
      display: false,
      ticks: {
        display: false,
      },
    },
  },
  plugins:{
    legend:{
      display: false
    }
  }
};
export let lineChartType: ChartType = 'line';
export let lineChartData1: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        38, 76, 36, 32, 48, 54, 87, 88, 96, 53, 21, 24, 14, 45, 25, 32, 67, 49,
        72, 52, 55, 46, 54, 32, 74, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48,
      ],
      label: 'Bitcoin Price',
      backgroundColor: 'rgba(255, 155, 33,0.05)',
      borderColor: '#ff9b21',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData2: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54,
        87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48,
      ],
      label: 'Ethereum Price',
      backgroundColor: 'rgba(111, 66, 193, 0.05)',
      borderColor: '#6f42c1',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData3: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        88, 96, 36, 32, 48, 24, 14, 45, 25, 32, 45, 54, 51, 52, 48, 54, 67, 49,
        58, 78, 55, 41, 21, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74,
      ],
      label: 'Ripple Price',
      backgroundColor: 'rgba(1, 184, 255,0.05)',
      borderColor: '#01b8ff',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData4: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45,
        25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74,
      ],
      label: 'Dash-price',
      backgroundColor: 'rgba(241, 56, 139,0.05)',
      borderColor: '#f1388b',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData5: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        54, 35, 24, 64, 43, 55, 39, 60, 61, 54, 62, 63, 44, 55, 64, 34, 46, 34,
        64, 50, 34, 53, 4, 43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64,
      ],
      label: 'Neo-price',
      backgroundColor: 'rgba(25, 177, 89,0.05)',
      borderColor: '#19b159',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData6: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46,
      ],
      label: 'Litecoin-price',
      backgroundColor: 'rgba(143, 143, 177,0.05)',
      borderColor: '#8f8fb1',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData7: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        77, 40, 60, 37, 56, 24, 65, 31, 37, 93, 62, 51, 35, 41, 35, 27, 39, 53,
        61, 37, 44, 43, 39, 32,
      ],
      label: 'Rise-price',
      backgroundColor: 'rgba(255, 51, 77,0.05)',
      borderColor: '#ff334d',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
export let lineChartData8: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [
        67, 50, 60, 37, 56, 44, 85, 31, 37, 43, 62, 51, 35, 41, 35, 27, 39, 53,
        61, 37, 44, 43, 39, 32,
      ],
      label: 'bts-price',
      backgroundColor: 'rgba(0, 204, 204,0.05)',
      borderColor: '#00cccc',
      pointBorderColor: 'transparent',
      pointBackgroundColor: 'transparent',
      tension: 0,
      borderWidth: 1,
      fill: 'origin',
    },
  ],
  labels: [
    'Date 1',
    'Date 2',
    'Date 3',
    'Date 4',
    'Date 5',
    'Date 6',
    'Date 7',
    'Date 8',
    'Date 9',
    'Date 10',
    'Date 11',
    'Date 12',
    'Date 13',
    'Date 14',
    'Date 15',
  ],
};
