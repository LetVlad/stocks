export const TIME_INTERVAL = {
    MINUTE: 'Minute',
    MINUTES: 'Minutes', // 5 minutes
    HOUR: 'Hours',
    WEEK: ''
}

export const getApiUrl = (period, precision) => {
    return `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`
}

export const getChartOptions = (categories, data) => {
    return {
        chart: {
            backgroundColor: '#FCFFC5',
        },
        title: {
            text: 'Apple Inc',
            align: 'left',
            x: 70
        },
        subtitle: {
            text: 'AAPL (Nasdaq - US)',
            align: 'left',
            x: 50
        },
        series: [{ data, name: 'CLose', cursor: 'crosshair' }],
        legend: {
            enabled: false,
        },
        xAxis: {
            crosshair: {
                width:3
            },
            categories,
            title: {
                text: 'Date and Time'
            }
        },
        yAxis: {
            crosshair: {
                width: 2
            },
            title: {
                text: 'Close at $'
            }
        }
    }
}
