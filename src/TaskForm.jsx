import React from "react";

const TaskForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#302b70] via-[#022753] to-[#022753]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-[#022753] mb-6">
          To-Do List 📋
        </h2>

      
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-3 border border-[#818181] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#fe653d] bg-[#f9f9f9] text-[#022753] placeholder-[#818181]"
            placeholder="Add your task"
          />
          <button className="p-3 bg-[#fe653d] text-white rounded-r-md hover:bg-[#fe653d] transition duration-200">
            Add
          </button>
        </div>

       
        <ul>
          {[
            { id: 1, text: "Create a JavaScript project", completed: true },
            { id: 2, text: "Upload it online", completed: false },
          ].map((taskItem, index) => (
            <li
              key={taskItem.id}
              className={`flex items-center justify-between p-4 mb-4 rounded-lg ${
                taskItem.completed ? "bg-gray-200" : "bg-blue-100"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={taskItem.completed}
                  className="mr-2"
                  onChange={() => {
                  
                    taskItem.completed = !taskItem.completed;
                    
                  }}
                />
                <span
                  className={`text-lg ${
                    taskItem.completed ? "line-through text-[#818181]" : ""
                  }`}
                >
                  {taskItem.text}
                </span>
              </div>
              <button className="text-red-500 hover:text-red-700">×</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskForm;
