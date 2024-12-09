import React from "react";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item text-center text-muted">
          No tasks added yet.
        </li>
      ) : (
        tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
