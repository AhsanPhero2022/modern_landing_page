import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CountUp from "react-countup";

ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsCard = () => {
  const chartData = {
    labels: [
      "Referral",
      "Organic Search",
      "Direct",
      "Other",
      "Paid Search",
      "Social",
      "Display",
      "Email",
    ],
    datasets: [
      {
        data: [602, 573, 564, 410, 212, 178, 126, 122],
        backgroundColor: [
          "#FF776F",
          "#FFC876",
          "#7ADB78",
          "#858DFF",
          "#AC6AFF",
          "#FF98E2",
          "#79FFF7",
          "#9F53FF",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div className="bg-n-6 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Google Analytics</h2>
      <div className="mb-4">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">Sessions</h3>
          <CountUp
            end={2787}
            duration={2}
            separator=","
            className="text-2xl font-bold"
          />
        </div>
        <div className="bg-n-5 p-4 rounded-lg">
          <h3 className="text-sm text-n-3 mb-2">Goal Completions</h3>
          <CountUp
            end={3306}
            duration={2}
            separator=","
            className="text-2xl font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
