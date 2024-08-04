import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart: React.FC = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
    datasets: [
      {
        label: 'Activity',
        data: [3000, 5000, 4000, 6000, 7000, 8000, 10000, 11000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category' as const,
        labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // This is necessary to ensure that the scales are registered correctly
    Chart.register(CategoryScale);
  }, []);

  return (
    <div style={{ height: '200px' , width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;