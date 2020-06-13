import React, {useState} from 'react';

function KanbanCreateTaskForm(props) {

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
      </form>}
    </div>
  );
}

export default KanbanCreateTaskForm;
