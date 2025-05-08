import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface MiniChartProps {
  data: number[];
  priceChange: number;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, priceChange }) => {
  const chartColor = priceChange >= 0 ? 'rgb(22, 199, 132)' : 'rgb(234, 57, 67)';
  
  const chartData = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data,
        borderColor: chartColor,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <div className="h-12 w-32">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MiniChart;