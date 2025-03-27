import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const TaskForm = (props) => {
  const { tasks, setTasks } = props;
  const [taskInput, setTaskInput] = useState(""); // value của input
  console.log("taskInput", taskInput);
  return (
    <form className="py-8">
      <TextField
        id="outlined-basic"
        label="Thêm tên công việc"
        variant="outlined"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-full"
      />
      {/* Thêm Select các danh mục trong todo */}
      {/* Thêm Autocompleted các tag cho todo */}
    </form>
  );
};

export default TaskForm;
