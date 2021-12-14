import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from 'react';

const Chart = ({ chartData }) => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const tempData = [];
    for (let key in chartData) {
      tempData.push({name: key.charAt(0).toUpperCase() + key.slice(1), data: [Number(chartData[key])]});
    }
    setData(tempData);
  }, [chartData]);
  
const options = {

  title: {
    text: 'Total Carbon Emissions'
  },

  chart: {
    type: 'bar',
    height: 200,
    width: 600,
    showAxes: false,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  series: data,
          
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },

  xAxis: {
    labels: {
        enabled: false
    },
    title: {
        text: null
    },
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
    categories: ["Total Carbon Emissions"]
},
yAxis: {
    endOnTick: false,
    startOnTick: false,
    labels: {
        enabled: false
    },
    title: {
        text: null
    },
    tickPositions: []
},

  legend: {
    reversed: true
  },

}

return (
  <>
{data.length !== 0 ? <HighchartsReact
    highcharts={Highcharts}
    options={options}
    /> : <p>Please complete form</p>}
  </>
  );

}

export default Chart;