/*

import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

const App = () => {
    const { tasks, addTask, removeTask } = useTasks();

    return (
        <div className="container mt-5">
            <h1 className="text-center">Task Scheduler</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
};

export default App;
*/

import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Remove a task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Task Scheduler</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
