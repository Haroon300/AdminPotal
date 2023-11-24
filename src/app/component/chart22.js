import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chartg = () => {
  const labels = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'
  ];

  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: 'Islamabad United',
        data: [3, 5, 2, 6, 8, 1, 6, 7, 2, 0, 2],
        backgroundColor: 'rgba(230, 74, 25, 0.7)',
        borderColor: 'rgba(230, 74, 25, 1)',
        borderWidth: 1,
      },
      {
        label: 'Karachi Kings',
        data: [6, 0, 8, 6, 4, 9, 4, 3, 1, 5, 4],
        backgroundColor: 'rgba(251, 140, 0, 0.7)',
        borderColor: 'rgba(251, 140, 0, 1)',
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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Match Runs Per Over',
        font: { size: 16 },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to scale with the parent container
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [3],
          borderDashOffset: [3],
          drawBorder: false,
          color: function (context) {
            if (context.tick.value % 2 === 0) {
              return 'rgba(0, 0, 0, 0)';
            }
            return 'rgba(0, 0, 0, 0.1)';
          },
        },
      },
    },
  });

  return (
    <div className='shadow-lg w-1/2 h-full'>
      <Bar options={chartOptions} data={chartData} />
    </div>

  );
};
