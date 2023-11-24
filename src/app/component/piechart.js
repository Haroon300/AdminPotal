import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Title, Legend);

const Piechart = () => {
  const labels = ['Karachi Kings', 'Lahore Qalandars', 'Islamabad United', 'Multan Sultans'];

  const [chartData, setChartData] = useState({
    datasets: [
      {
        // cutout: '30',
        label: "Team's Points",
        data: [3, 5, 2, 3],
        backgroundColor: [
          'rgba(216, 100, 16)',
          'rgba(216, 152, 55)',
          'rgba(204, 134, 42)',
          'rgba(10, 9, 8)',
        ],
        borderColor: [
          'rgba(216, 100, 16)',
          'rgba(216, 152, 55)',
          'rgba(204, 134, 42)',
          'rgba(10, 9, 8)',
        ],
        borderWidth: 1,
      },
    ],
    labels: labels,
  });

  const [chartOptions, setChartOptions] = useState({
    maintainAspectRatio: false, // Set to false to allow the chart to be responsive
    responsive: true,
    
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: "Team's Points",
        font: { size: 16 },
      },
    },
    responsive: true,
  });

  return (
      <div className='shadow-lg bg-white p-4 rounded-md'>
      <Doughnut className='' options={chartOptions} data={chartData} />
     </div>
  );
};

export default Piechart;
