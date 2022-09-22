import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

export declare type SingleLineLabel = string;
export declare type MultiLineLabel = string[];
export declare type Label = SingleLineLabel | MultiLineLabel;




//Line Charts
export const lineChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }
  ],
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
};

export const lineChartOptions: ChartConfiguration['options'] | any = {
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    line: {
      tension: 0.5
    }
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    x: {},
    'y-axis-0':
      {
        position: 'left',
      },
    'y-axis-1': {
      position: 'right',
      grid: {
        color: 'rgba(255,0,0,0.3)',
      },
      ticks: {
        color: 'rgba(255,0,0,0.3)'
      }
    }
  },

  plugins: {
    legend: { display: true },
    annotation: {
      annotations: [
        {
          type: 'line',
          scaleID: 'x',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            position: 'center',
            enabled: true,
            color: 'orange',
            content: 'LineAnno',
            font: {
              weight: 'bold'
            }
          }
        },
      ],
    }
  }
};

export const lineChartType: ChartType = 'line';

//Line Charts
export const multipleChartData: ChartConfiguration['data'] = {
  datasets: [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    },
    {
      data: [ 28, 48, 40, 19, 86, 27, 90 ],
      label: 'Series B',
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      fill: 'origin',
    },
    {
      data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      label: 'Series C',
      yAxisID: 'y-axis-1',
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'rgba(255,0,0,0.3)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }
  ],
  labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
};

export const multipleChartOptions: ChartConfiguration['options'] | any = {
  maintainAspectRatio: false,
  responsive: true,
  elements: {
    line: {
      tension: 0.5
    }
  },
  scales: {
    // We use this empty structure as a placeholder for dynamic theming.
    x: {},
    'y-axis-0':
      {
        position: 'left',
      },
    'y-axis-1': {
      position: 'right',
      grid: {
        color: 'rgba(255,0,0,0.3)',
      },
      ticks: {
        color: 'rgba(255,0,0,0.3)'
      }
    }
  },

  plugins: {
    legend: { display: true },
    annotation: {
      annotations: [
        {
          type: 'line',
          scaleID: 'x',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            position: 'center',
            enabled: true,
            color: 'orange',
            content: 'LineAnno',
            font: {
              weight: 'bold'
            }
          }
        },
      ],
    }
  }
};

export const multipleChartType: ChartType = 'line';



// //BarChart1
export const barChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
  // We use these empty structures as placeholders for dynamic theming.
  scales: {
    x: {},
    y: {
      min: 10
    }
  },
  plugins: {
    legend: {
      display: true,
    },
  }
};
export const barChartType: ChartType = 'bar';
export const barChartPlugins = [
  DataLabelsPlugin
];
export const barChartData: ChartData<'bar'> = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  ]
};




// //DoughNut Chart and Pie chart data
// Doughnut
  export const doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  export const doughnutChartData: ChartData<'doughnut'> = {
    labels: doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  
  export const doughnutChartType: ChartType = 'doughnut';
   // Pie
   export const pieChartOptions: ChartConfiguration['options'] | any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value:any, ctx:any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  export const pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  export const pieChartType: ChartType = 'pie';
  export const pieChartPlugins = [ DatalabelsPlugin ];



// Radar
export const radarChartOptions: ChartConfiguration['options'] = {
  maintainAspectRatio: false,
  responsive: true,
};
export const radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

export const radarChartData: ChartData<'radar'> = {
  labels: radarChartLabels,
  datasets: [
    { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
    { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
  ]
};
export const radarChartType: ChartType = 'radar';

 // PolarArea
 export const polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
 export const polarAreaChartData: ChartData<'polarArea'> = {
   labels: polarAreaChartLabels,
   datasets: [ {
     data: [ 300, 500, 100, 40, 120 ],
     label: 'Series 1'
   } ]
 };

 export const polarAreaLegend = true;

 export const polarAreaChartType: ChartType = 'polarArea';
 