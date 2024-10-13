// TaskList.js
import React from 'react';

const TaskList = ({ title, tasks }) => {
  return (
    <div className="w-1/2 bg-gray-100 rounded-lg p-4">
      <h4 className="text-lg text-gray-400 font-medium mb-4">{title}</h4>
      <ul className="list-none">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="border bg-white rounded-lg mt-2 pl-4 py-2 hover:translate-x-1 transition-transform duration-200 hover:bg-white hover:shadow-lg"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
