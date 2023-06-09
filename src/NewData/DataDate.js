const DataDate = (props) => {
    const month = props.date.toLocaleString("en-US" , {month:"long"});
    const day = props.date.toLocaleString('en-US' , {day:"2-digit"});
    const year =props.date.getFullYear();
    return (
        <div className="date">
          <div className="data-date__day">{day}</div>
          <div className="data-date__month">{month}</div>
          <div className="data-date__year">{year}</div>
        </div>
      );
};
export default DataDate;