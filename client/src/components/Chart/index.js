import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component {
  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get('/api/chart').then((res) => {
      const coin = res.data;
      let labels = coin.unique_array;
      let mRate = coin.mRate;
      let fRate = coin.fRate;

      this.setState({
        chartData: {
          labels: labels,
          datasets: [
            {
              label: 'Men',
              data: mRate,
              backgroundColor: 'transparent',
              borderWidth: 4,
              borderColor: 'blue',
              hoverBorderWidth: 3,
              hoverBorderColor: '#333',
            },
            {
              label: 'Women',
              data: fRate,
              backgroundColor: 'transparent',
              borderWidth: 4,
              borderColor: 'pink',
              hoverBorderWidth: 3,
              hoverBorderColor: '#333',
            },
          ],
        },
      });
    });
  }
  constructor() {
    super();

    this.state = {
      chartData: {},
    };
  }

  render() {
    return (
      <div className='chart'>
        {console.log(this.state.unique_array)}
        <Line
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: 'Unemployment by Sex',
              fontSize: 25,
            },
            legend: {
              display: true,
              position: 'top',
              labels: {
                fontColor: '#000',
                fontWeight: 'bolder'
              },
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                Top: 0,
              },
              tooltips: {
                enabled: true,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
