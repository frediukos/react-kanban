import React, {useState} from 'react';
import './App.css';
import KanbanBoard from "./Components/KanbanBoard";
import KanbanCreateTaskForm from "./Components/KanbanCreateTaskForm";


const statuses = [
  {id: 1, name: 'To Do'},
  {id: 2, name: 'In Progress'},
  {id: 3, name: 'Review'},
  {id: 4, name: 'Done'}
];

const initialTasks = [
  {id: 1, name: 'Give a freedom to snails', priority: 3, statusId: 1},
  {id: 2, name: 'Book reading', priority: 1, statusId: 2},
  {id: 3, name: 'KANBAN project', priority: 2, statusId: 2},
  {id: 3, name: 'Idioms presentation', priority: 1, statusId: 3},
  {id: 4, name: 'Make breakfast for the family', priority: 3, statusId: 4},
  {id: 4, name: 'Read the article', priority: 1, statusId: 4},
];

const priorities = [
  {id: 1, level: 'high', color: 'red'},
  {id: 2, level: 'medium', color: 'orange'},
  {id: 3, level: 'low', color: 'blue'},
];


function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [status, setStatus] = useState(statuses);



  const [taskInput, setTaskInput] = useState('');
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);






  return (
    <div className="container">
      <h2 className='h2'>KANBAN board</h2>
      <KanbanCreateTaskForm statuses={status}
                            tasks={tasks}
                            priorities={priorities}

      />
      <p></p>
      <KanbanBoard statuses={statuses}
                   tasks={tasks}
                   priorities={priorities}

      />

    </div>
  );
}

export default App;
