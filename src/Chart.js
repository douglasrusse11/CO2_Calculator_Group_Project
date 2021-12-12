import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from 'react';

const Chart = ({ formData }) => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const tempData = [];
    for (let key in formData) {
      tempData.push({name: key.charAt(0).toUpperCase() + key.slice(1), data: [Number(formData[key])]});
    }
    setData(tempData);
  }, [formData]);
  
const options = {

  title: {
    text: 'Total Carbon Emissions'
  },

  chart: {
    type: 'bar'
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
    categories: ["Total Carbon Emissions"]
  },

  yAxis: {
    min: 0,
      title: {
        enabled: false
      }
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