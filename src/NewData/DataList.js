import React from "react";
import DataItem from "./DataItem";

const DataList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="item-data__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="data-list">
      {props.items.map((expense) => (
        <DataItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          description={expense.description}
          type={expense.type}
          category={expense.category}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default DataList;
