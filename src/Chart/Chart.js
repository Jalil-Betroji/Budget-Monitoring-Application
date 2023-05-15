import React, { useState } from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const expenseDataPoints = props.dataPoints.filter(
    (dataPoint) => dataPoint.type === "Expense"
  );
  const incomeDataPoints = props.dataPoints.filter(
    (dataPoint) => dataPoint.type === "Income"
  );

  const expenseMaxValue = Math.max(
    ...expenseDataPoints.map((dataPoint) => dataPoint.value)
  );
  const incomeMaxValue = Math.max(
    ...incomeDataPoints.map((dataPoint) => dataPoint.value)
  );
  const otherMonth = props.dataPoints.filter(
    (dataPoint) => dataPoint.type === ""
  );
  const monthMaxValue = Math.max(
    ...otherMonth.map((dataPoint) => dataPoint.value)
  );

  return (
    <div>
      <div className="chart">
        {otherMonth.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            MaxValue={monthMaxValue}
            label={dataPoint.label}
            type={dataPoint.type}
          />
        ))}
        {expenseDataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            expenseMaxValue={expenseMaxValue}
            label={dataPoint.label}
            type={dataPoint.type}
          />
        ))}
        {incomeDataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            incomeMaxValue={incomeMaxValue}
            label={dataPoint.label}
            type={dataPoint.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
