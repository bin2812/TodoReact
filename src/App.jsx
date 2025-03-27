import { forwardRef, useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
import Slide from "@mui/material/Slide";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import SearchInput from "./SearchInput";
import TaskForm from "./TaskForm";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Upload it online", isCompleted: true },
    { id: 2, text: "Attend the meeting", isCompleted: false },
    { id: 3, text: "Prepare the presentation", isCompleted: false },
  ]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleAddTask = () => {
  //   if (!taskInput) return;
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: tasks.length + 1,
  //       text: taskInput,
  //       isCompleted: false,
  //     },
  //   ]);
  //   setTaskInput("");
  // };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-custom-gradient">
        <div className="bg-white !px-8 !py-16 rounded-lg min-w-[40vw]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#302b70] font-bold text-4xl">To-Do List 📝</h1>
            <button
              onClick={handleClickOpen}
              className="text-white bg-[#fe653d] text-[18px] rounded-3xl px-8 py-2 cursor-pointer hover:opacity-90"
            >
              <i className="fa-solid fa-plus pr-2"></i>
              Add
            </button>
          </div>
          <SearchInput />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent className="min-h-[250px]">
          <TaskForm tasks={tasks} setTasks={setTasks} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create Task</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
