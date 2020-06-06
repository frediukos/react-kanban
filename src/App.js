import React, {useState} from 'react';
import './App.css';
import KanbanBoard from "./Components/KanbanBoard";


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
  {id: 3, name: 'Idioms presentation', priority: 2, statusId: 3},
  {id: 3, name: 'Make breakfast for the family', priority: 1, statusId: 4},
  {id: 3, name: 'Read the article', priority: 1, statusId: 4},
];


function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [status, setStatus] = useState(statuses);

  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);

  const [taskInput, setTaskInput] = useState('');
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);

  const openCreateTaskForm = () => {
    setIsOpenCreateTaskForm(true);
  };

  const onTaskChange = (e) => {
    setIsActiveButtonTaskCreate(e.target.value.length > 3);
    setTaskInput(e.target.value);
  };

  const taskSubmit = (e) => {
    e.preventDefault(); /* отказаться от повоедения по-умолчанию - перезагрузка страницы */
    console.log(taskInput);
    taskReset();
  };

  const taskReset = () => {
    setTaskInput('');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };

  return (
    <div>



    <div className="container">
      <h2 className='h2'>KANBAN board</h2>

      {!isOpenCreateTaskForm && <button className="btn btn-primary" onClick={openCreateTaskForm}>Create task</button>}

      {isOpenCreateTaskForm &&
      <form>
        <div className="form-group">
          <input type="text" className="form-control"
                 onChange={onTaskChange}/>
        </div>
        <button type="submit" className="btn btn-primary"
                disabled={!isActiveButtonTaskCreate}
                onClick={taskSubmit}>Submit
        </button>
        <button type="submit" className="btn btn-secondary"
                onClick={taskReset}>Cancel
        </button>
      </form>
      }



      <KanbanBoard statuses={statuses}
                   tasks={tasks}
      />

    </div>
    </div>
  );
}

export default App;
