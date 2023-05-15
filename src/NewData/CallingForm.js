import React, { useState } from "react";
import "./CallingForm.css";
import DataForm from "./DataForm";

const CallingForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveNewDataHandler = (enteredNewData) => {
    const NewDataPush = {
      ...enteredNewData,
      id: Math.random.toString(),
    };
    props.onAddData(NewDataPush);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="form-holder">
      {!isEditing && <button onClick={startEditingHandler}>Add New</button>}
      {isEditing && (
        <DataForm
          onSaveNewData={saveNewDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default CallingForm;
