import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CountUp from "react-countup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SearchConsoleCard = () => {
  const chartData = {
    labels: ["Apr 1", "Apr 8", "Apr 15", "Apr 22", "Apr 29"],
    datasets: [
      {
        label: "Impressions",
        data: [200000, 220000, 240000, 250000, 262000],
        borderColor: "#AC6AFF",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-n-6 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Google Search Console</h2>
      <div className="mb-4">
        <h3 className="text-sm text-n-3 mb-2">Impressions</h3>
        <CountUp
          end={262000}
          duration={2}
          separator=","
          className="text-4xl font-bold"
        />
      </div>
      <div className="h-40">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SearchConsoleCard;
