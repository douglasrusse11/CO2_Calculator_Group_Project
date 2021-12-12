import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from 'react';

const Chart = ({formData}) => {

  // const [data, setData] = useState([]);
  // useEffect(() => {getData()}, []);
  // if (Object.keys(formData).length === 0) return null;
  
  // const getData = () => {
  //   const tempData = [];
  //   for (let key in formData) {
  //     tempData.push({name: key, x: 1, y: Number(formData[key])});
  //   }
  //   setData(tempData);
  // }
  
const options = {
  title: {
    text: 'Our chart'
  },
  chart: {
    type: 'bar'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

return (
<HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  );

}

export default Chart;