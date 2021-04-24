import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.global.legend.position = 'right';

const DonutChart = props => {
  return (
    <>
      <Doughnut
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          legend: { display: false },
          datasets: [
            {
              label: '# of Votes',
              data: [12, 25, 45],
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: 'none',
              //   [
              //     'rgba(255, 99, 132, 1)',
              //     'rgba(54, 162, 235, 1)',
              //     'rgba(255, 206, 86, 1)',
              //     'rgba(75, 192, 192, 1)',
              //     'rgba(153, 102, 255, 1)',
              //     'rgba(255, 159, 64, 1)',
              //   ],
              borderWidth: 1,
            },
          ],
        }}
        // height={90}
        // width={700}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default DonutChart;
