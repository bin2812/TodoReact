import React from "react";

const TaskList = (props) => {
  const { tasks, setTasks } = props;
  console.log("tasks", tasks);
  return (
    <div className="my-8 flex flex-col gap-4 cursor-pointer">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center hover:shadow-lg hover:scale-105 transition-transform duration-200 bg-white p-4 rounded-lg"
          onClick={() => {
            setTasks(
              tasks.map((t) =>
                t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
              )
            );
          }}
        >
          <div className="flex items-center gap-4">
            {task.isCompleted ? (
              <div className="w-6 h-6 rounded-full border border-orange-600 bg-[#fe653d] border-solid flex items-center justify-center">
                <i className="fa-solid fa-check text-white"></i>
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border border-gray-500 bg-transparent border-solid flex items-center justify-center"></div>
            )}
            <p
              className={`text-gray-500 ${task.isCompleted && "line-through"}`}
            >
              {task.text}
            </p>
          </div>
          <i
            className="fa-solid fa-xmark text-gray-500 hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
