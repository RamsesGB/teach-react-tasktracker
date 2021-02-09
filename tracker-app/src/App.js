import './App.css';
import { useState } from 'react';
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import AddTask from './Components/AddTask.js';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Morning Pages',
      day: 'Feb 8th @ 7:00AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Gym',
      day: 'Feb 9th @ 6:00AM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Meditate',
      day: 'Feb 6th @ 9:00AM',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    //creating an ID since there is no back-end to create unique ID's
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* This is a way to conditionally render without a ternary. If the expression resolves to true then it renders the component otherwise nothing happens.  */}
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
