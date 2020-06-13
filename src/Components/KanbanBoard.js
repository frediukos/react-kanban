import React, {useState} from 'react';
import KanbanList from "./KanbanList";
import KanbanCreateTaskForm from "./KanbanCreateTaskForm";

function KanbanBoard(props) {

  return (
    <div className="container">
      {
          <KanbanList statuses={props.statuses}
                      tasks={props.tasks}
                      priority={props.priority}
          />
      }

    </div>
  );
}

export default KanbanBoard;