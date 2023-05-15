import "./ChartBar.css";

const ChartBar = (props) => {
  let expenseBarFillHeight = "0%";
  let incomeBarFillHeight = "0%";

  if (props.expenseMaxValue > 0) {
    expenseBarFillHeight =
      Math.round((props.value / props.expenseMaxValue) * 100) + "%";
  }
  console.log(props.expenseMaxValue);
  if (props.incomeMaxValue > 0) {
    incomeBarFillHeight =
      Math.round((props.value / props.incomeMaxValue) * 100) + "%";
  }

  return (
    <div className="chart-flex">
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ height: expenseBarFillHeight }}
          ></div>
        </div>

        <div className="chart-bar__inner">
          <div
            className="chart-bar__income-fill"
            style={{ height: incomeBarFillHeight }}
          ></div>
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
