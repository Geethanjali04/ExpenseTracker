import ChartBar from './ChartBar';
import React from 'react';
import './Chart.css';
const Chart = (props) =>{  
    const valueArray = props.dataPoints.map(dataPoint=>dataPoint.value); 
    const maxVal=Math.max(...valueArray);

    return (<div className='chart'>
    {props.dataPoints.map(dataPoint=> (<ChartBar value={dataPoint.value} key={dataPoint.label} maxValue={maxVal} label={dataPoint.label}/>))}
    </div>);

} 
export default Chart;