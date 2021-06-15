import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar key={data.id} value={data.value} maxValue={null} label={data.label} />
      ))}
    </div>
  );
};

export default Chart;
