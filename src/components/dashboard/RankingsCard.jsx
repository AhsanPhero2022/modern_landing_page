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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RankingsCard = () => {
  const chartData = {
    labels: [
      "18 Oct",
      "22 Oct",
      "26 Oct",
      "30 Oct",
      "4 Nov",
      "8 Nov",
      "12 Nov",
      "16 Nov",
    ],
    datasets: [
      {
        label: "1-3",
        data: [5, 6, 7, 8, 7, 8, 9, 10],
        backgroundColor: "#7ADB78",
        borderColor: "#7ADB78",
      },
      {
        label: "4-10",
        data: [3, 4, 5, 4, 5, 6, 5, 6],
        backgroundColor: "#FFC876",
        borderColor: "#FFC876",
      },
      {
        label: "11-20",
        data: [2, 3, 2, 3, 4, 3, 4, 5],
        backgroundColor: "#FF776F",
        borderColor: "#FF776F",
      },
      {
        label: "21-50",
        data: [1, 2, 1, 2, 1, 2, 3, 2],
        backgroundColor: "#858DFF",
        borderColor: "#858DFF",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="bg-n-6 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Rankings</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">Google Rankings</h3>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">Google Change</h3>
          <p className="text-4xl font-bold text-color-4">+4</p>
        </div>
      </div>
      <div className="h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default RankingsCard;
