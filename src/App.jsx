import "./App.css";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className="bg-[#302b70]">
      <div className="bg-white px-4 py-8 rounded-lg">
        <h1>To-Do List 📝</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
