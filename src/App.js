import React, {useState, useEffect} from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { getStocksData } from "./services/httpService";
import { TIME_INTERVAL, getChartOptions } from "./utils";
import './style.css'

const App = () => {

    const [data, setData] = useState([])

    const setStockData = async (precision, period) => {
        setData(await getStocksData(precision, period))
    }

    useEffect( () => {
        setStockData(TIME_INTERVAL.MINUTES, 5);
    }, [])

    const Chart = ({ options, highcharts }) => <HighchartsReact
        highcharts={highcharts}
        constructorType={'chart'}
        options={options}
    />

    const categories = data.map(i => i.Date)
    const values = data.map(i => i.Close)
    const options = getChartOptions(categories, values)

    return (
        <div>
            <button className="primary" onClick={() => setStockData(TIME_INTERVAL.MINUTE)}>1 Minute</button>
            <button className="primary" onClick={() => setStockData(TIME_INTERVAL.MINUTES, 5)}>5 Minutes</button>
            <button className="primary" onClick={() => setStockData(TIME_INTERVAL.HOUR)}>1 Hour</button>
            <button className="primary" onClick={() => setStockData(TIME_INTERVAL.HOUR, 168)}>1 week</button>
            <Chart options={options} highcharts={Highcharts} />
        </div>
    )

};

export default App;

