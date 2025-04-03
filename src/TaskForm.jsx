import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const TaskForm = (props) => {
  const { tasks, setTasks } = props;
  const [taskInput, setTaskInput] = useState(""); 
  const [age, setAge] = useState(""); 
  const [options, setOptions] = useState([]); 
  const [selectedOptions, setSelectedOptions] = useState([]); 

  
  const categories = {
    sport: ["Basketball", "Football","Swimming","Running"],
    study: ["Math", "Physics","Chemist","Chemistry"],
    work: ["Cleaning House", "Cooking","Dishwashing", "Business"],
  };

  const handleChange = (event) => {
    const category = event.target.value;
    setAge(category);
    setOptions(categories[category] || []); 
  };

  return (
    <form className="py-8 flex flex-col gap-y-5">
      <TextField
        id="outlined-basic"
        label="Add a task name"
        variant="outlined"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="w-full"
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"study"}>Study</MenuItem>
          <MenuItem value={"sport"}>Sport</MenuItem>
          <MenuItem value={"work"}>Work</MenuItem>
        </Select>
      </FormControl>

      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => option}
        value={selectedOptions}
        onChange={(event, newValue) => setSelectedOptions(newValue)} // Lưu các tùy chọn người dùng chọn
        renderInput={(params) => (
          <TextField {...params} label="Type" placeholder="Favorites" />
        )}
      />
    </form>
  );
};

export default TaskForm;
