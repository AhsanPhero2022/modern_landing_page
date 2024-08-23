import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScoreCircle = ({ value, color }) => (
  <div className="w-24 h-24">
    <CircularProgressbar
      value={value}
      text={`${value}`}
      styles={buildStyles({
        textColor: color,
        pathColor: color,
      })}
    />
  </div>
);

const LighthouseCard = () => {
  return (
    <div className="bg-n-6 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Google Lighthouse</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <ScoreCircle value={70} color="#FFC876" />
          <p className="mt-2 text-sm text-n-3">Performance Score</p>
        </div>
        <div className="flex flex-col items-center">
          <ScoreCircle value={40} color="#FF776F" />
          <p className="mt-2 text-sm text-n-3">SEO Score</p>
        </div>
        <div className="flex flex-col items-center">
          <ScoreCircle value={80} color="#7ADB78" />
          <p className="mt-2 text-sm text-n-3">Accessibility Score</p>
        </div>
        <div className="flex flex-col items-center">
          <ScoreCircle value={90} color="#858DFF" />
          <p className="mt-2 text-sm text-n-3">Best Practices Score</p>
        </div>
      </div>
    </div>
  );
};

export default LighthouseCard;
