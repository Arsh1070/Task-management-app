import { Input } from "antd";
import React, { useState } from "react";

const SaveTask = ({ inputVal, onSaveTaskData }) => {
  const [inr, setInr] = useState(inputVal);

  const onSave = (e) => {
    setInr(e.target.value);
    onSaveTaskData(inr);
  };
  return <Input type="text" size="small" value={inr} onChange={onSave} />;
};

export default SaveTask;
