// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'

// const FinalCharts = () => {

//     const options = {

//         title: {
//             text: 'Average Carbon Emissions'
//         },

//         chart: {
//             type: 'bar',
//             height: 200,
//             showAxes: false,
//             backgroundColor: 'rgba(0,0,0,0)'
//         },

//         series: {
//             data: [12.19, 6.76, 10.51],
//         },

//             xAxis: {
//                 labels: {
//                     enabled: false
//                 },
//                 title: {
//                     text: null
//                 },
//                 startOnTick: false,
//                 endOnTick: false,
//                 tickPositions: [],
//                 categories: ["Total Carbon Emissions"]
//             },
//             yAxis: {
//                 endOnTick: false,
//                 startOnTick: false,
//                 labels: {
//                     enabled: false
//                 },
//                 title: {
//                     text: null
//                 },
//                 tickPositions: [0]
//             },

//             legend: {
//                 reversed: true
//             },

//         }

//       return(
//             <HighchartsReact highcharts={Highcharts} options={options}/>
//         );

//     }

// export default FinalCharts;


import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from 'react';

const FinalCharts = ({ chartData }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = 0;
    for (let key in chartData) {
      tempData += Number(chartData[key]);
    }
    setData(tempData);
  }, [chartData]);

  const options = {

    title: {
      text: 'Total Carbon Emissions',
      style: {
        display: "None"
      }
    },

    chart: {
      type: 'bar',
      height: 200,
      width: 600,
      showAxes: false,
      backgroundColor: 'rgba(0,0,0,0)'
    },

    series: [
      {
        type: 'bar',
        name: "Your Carbon Footprint",
        data: [data]
      },
      {
        type: 'bar',
        name: "Average Carbon Footprint of person in the UK",
        data: [12.19]
      },
      {
        type: 'bar',
        name: "Average Carbon Footprint of person in the world",
        data: [6.76]
      },
      {
        type: 'bar',
        name: "Average Carbon Footprint per person to achieve 1.5 degrees",
        data: [10.51]
      }

    ],

    plotOptions: {
      series: {
        //   stacking: 'normal'
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
      itemStyle: {
        color: 'whitesmoke'
      }
    }

  }

  return (
    <>
      <h2>Your Carbon Emissions</h2>
      {data.length !== 0 ? <HighchartsReact
        highcharts={Highcharts}
        options={options}
      /> : <p>Please complete form</p>}
    </>
  );

}

export default FinalCharts;