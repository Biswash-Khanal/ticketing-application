import React from "react";
import { StatusBarProps } from "../{types}/alltypes";

const StatusDisplay = ({ status }: StatusBarProps) => {
  let colorchoice;
  if (status === "not started") {
    colorchoice = "bg-red-200";
  } else if (status === "started") {
    colorchoice = "bg-yellow-200";
  } else {
    colorchoice = "bg-green-200";
  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${colorchoice}`}>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusDisplay;
