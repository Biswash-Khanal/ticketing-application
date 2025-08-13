import React from "react";
import { ProgressBarProps } from "../{types}/alltypes";



const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = "bg-blue-600",
  height = "h-2.5",
}) => {
  // Ensure progress is between 0 and 100
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full bg-gray-200 rounded-full ${height}`}>
      <div
        className={`${color} rounded-full ${height} transition-all duration-500`}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
