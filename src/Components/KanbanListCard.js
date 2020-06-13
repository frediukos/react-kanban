import React, {useState} from 'react';

function KanbanListCard(props) {



  return (

    <div className="card-border mb-3" className="shadow  mb-3 bg-white rounded">
      <div className="card-header">{props.task.name}</div>
      <div className="card-body">
          <span className="card-title">priority:
            {props.priorities.find(el => el.id === props.task.priority).priority}



          </span>
        <p className="card-text"></p>
      </div>
    </div>


  );
}

export default KanbanListCard;