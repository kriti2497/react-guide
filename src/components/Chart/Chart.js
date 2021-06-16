import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const dataPtValueArray = props.dataPoints.map(dataPt => dataPt.value); 
  const totalMax = Math.max(...dataPtValueArray)

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar key={data.id} value={data.value} maxValue={totalMax} label={data.label} />
      ))}
    </div>
  );
};

export default Chart;
