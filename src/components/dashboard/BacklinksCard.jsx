import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BacklinksCard = () => {
  const chartData = {
    labels: ["Apr 5", "Apr 12", "Apr 19", "Apr 26"],
    datasets: [
      {
        label: "New",
        data: [800, 600, 900, 800],
        backgroundColor: "#7ADB78",
      },
      {
        label: "Lost",
        data: [500, 400, 600, 300],
        backgroundColor: "#FF776F",
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
      <h2 className="text-xl font-semibold mb-4">Backlinks</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">Citation Flow</h3>
          <div className="w-24 h-24 mx-auto">
            <CircularProgressbar
              value={55}
              text={`55`}
              styles={buildStyles({
                textColor: "#FF98E2",
                pathColor: "#FF98E2",
              })}
            />
          </div>
        </div>
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">New/Lost Links</h3>
          <div className="h-40">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinksCard;
