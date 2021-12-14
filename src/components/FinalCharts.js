import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const FinalCharts = () => {

    const options = {

        title: {
            text: 'Average Carbon Emissions'
        },

        chart: {
            type: 'bar',
            height: 200,
            showAxes: false,
            backgroundColor: 'rgba(0,0,0,0)'
        },

        series: {
            data: [12.19, 6.76, 10.51],
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
                tickPositions: [0]
            },

            legend: {
                reversed: true
            },

        }
      
      return(
            <HighchartsReact highcharts={Highcharts} options={options}/>
        );
      
    }

export default FinalCharts;