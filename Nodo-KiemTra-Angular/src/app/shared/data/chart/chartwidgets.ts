import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


export let ApexData1 = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Total Revenue',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#fa057a'],
};

export let ApexData2 = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Unique Visitors',
        data: [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27,]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#2dce89'],
}

export let ApexData3 = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Expenses',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#ff5b51'],
}

export let ApexData4 = {
    chart: {
        type: 'area',
        height: 60,
        width: 160,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            opacity: 0.2,
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Expenses',
        data: [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51]
    }],
    yaxis: {
        min: 0
    },
    colors: ['#ff5b51'],
}

export let ApexSparklines1 = {
    series: [{
        data: [2, 4, 3, 4, 5, 4, 5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#fa057a'],
    chart: {
        type: 'bar',
        widht: 250,
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}

export let ApexSparklines2 = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#f7346b'],
    chart: {
        type: 'bar',
        widht: 250,
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}

export let ApexSparklines3 = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#2dce89'],
    chart: {
        type: 'bar',
        widht: 250,
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true
        }
    }
}

export let ApexSparklines4 = {
    series: [{
        data: [3, 5, 4, 4, 5, 4, 5, 3, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 5, 4, 5, 4, 3, 5, 4, 3, 4, 5]
    }],
    colors: ['#45aaf2'],
    chart: {
        type: 'bar',
        widht: 250,
        height: 50,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '35%',
        }
    },

    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName:any) {
                    return "";
                }
            }
        },
        marker: {
            show: true,
        }
    }
}


//Crypto Charts
export let lineChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    responsive: true,
    tooltips: {
        mode: 'index',
        titleFontSize: 12,
        titleFontColor: '#7886a0',
        bodyFontColor: '#7886a0',
        backgroundColor: '#fff',
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        cornerRadius: 3,
        intersect: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
            },
            ticks: {
                fontSize: 2,
                fontColor: 'transparent'
            }
        }],
        yAxes: [{
            display: false,
            ticks: {
                display: false,
            }
        }]
    },
    title: {
        display: false,
    },
    elements: {
        line: {
            borderWidth: 3
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
        }
    }
}

export let lineChartLabels: Label[] = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartColors: Color[] = [
    {
        backgroundColor: 'rgba(68, 84, 195,0.06)',
        borderColor: 'rgba(68, 84, 195,0.6)',
        // borderWidth: 3,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent'
    }
]
export let lineChartData: ChartDataSets[] = [
    {
        data: [83, 56, 89, 73, 61, 75, 86, 56],
        label: 'Bitcoin',
    }
]

export let lineChartData1: ChartDataSets[] = [
    {
        data: [45, 78, 67, 78, 36, 78, 89, 84],
        label: 'Nem',
    }
]
export let lineChartData2: ChartDataSets[] = [
    {
        data: [56, 78, 36, 78, 29, 78, 37, 56],
        label: 'Ripple',
    }
]
export let lineChartData3: ChartDataSets[] = [
    {
        data: [45, 78, 98, 34, 67, 28, 89, 45],
        label: 'Neo',
    }
]

