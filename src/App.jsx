import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
function App() {
  return (
    <div className="bg-[#302b70] w-full min-h-screen flex items-center justify-center">
      <div className="bg-white px-4 py-8 rounded-lg">
        <h1>To-Do List 📝</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
