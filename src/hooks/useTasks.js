import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks([...tasks, task]);

    const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

    return { tasks, addTask, removeTask };
};

export default useTasks;
