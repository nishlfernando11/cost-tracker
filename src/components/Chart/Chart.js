import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const barValues = props.chartPoints.map(item => item.value);
    const maxValue = Math.max(...barValues);

    return <div className="chart">
        {props.chartPoints.map((item)=>
            <ChartBar
                label={item.label}
                key={item.label}
                value={item.value}
                maxValue={maxValue}
            />
        )}
    </div>
};

export default Chart;