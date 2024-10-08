"use client"
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Регистрируем компоненты ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Определяем интерфейс для компонента
interface BlogGraphProps {}

const BlogGraph: React.FC<BlogGraphProps> = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  // Заглушки для данных графика, можно заменить реальными данными
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Posts',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)),
        fill: false,
        backgroundColor: '#3DB4FF',
        borderColor: '#5bbaf5',
      },
      {
        label: 'Comments',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
        fill: false,
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgba(68, 67, 67, 0.2)',
      },
    ],
  };

  // Настройки графика
  const options = {
    responsive: true,
    maintainAspectRatio: false, // graph adaptive
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Activity for ${month}/${year}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full p-2">
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="flex items-center">
          <label htmlFor="month-select" className="mr-2">Month:</label>
          <select
            id="month-select"
            className="border rounded p-1"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center sm:ml-4 mt-2 sm:mt-0">
          <label htmlFor="year-select" className="mr-2">Year:</label>
          <select
            id="year-select"
            className="border rounded p-1"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={new Date().getFullYear() - i}>
                {new Date().getFullYear() - i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BlogGraph;