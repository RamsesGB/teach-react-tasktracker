import './App.css';
import { useState } from 'react';
import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';

function App() {
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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
