import React, { useState } from "react";
import DataDate from "./DataDate";

const DataItem = (props) => {
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleMouseEnter = (event) => {
    const chartBarPosition = event.target.getBoundingClientRect();
    const x = chartBarPosition.left + chartBarPosition.width / 2;
    const y = chartBarPosition.top - 10;
    setPopupPosition({ x, y });
    setIsPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopupVisible(false);
  };

  return (
    <li>
      <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="item-display">
        <DataDate date={props.date} />
        <div className="item-data__description">
          <h2>{props.title}</h2>
          <div
            
            className="more-info-popup"
            style={{
              display: isPopupVisible ? "block" : "none",
              left: popupPosition.x,
              top: popupPosition.y,
              position: "absolute"
            }}
          >
            <div>
              <label>Type:</label> {props.type}
            </div>
            <div>
              <label>Category:</label> {props.category}
            </div>
            <div>
              <label>Description:</label> {props.description}
            </div>
          </div>
          <div className="item-data__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default DataItem;