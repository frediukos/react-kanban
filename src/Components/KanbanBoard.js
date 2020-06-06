import React, {useState} from 'react';
import KanbanList from "./KanbanList";

function KanbanBoard(props) {

  return (
    <div className="container">

          <KanbanList statuses={props.statuses}
                      tasks={props.tasks}/>

    </div>
  );
}

export default KanbanBoard;