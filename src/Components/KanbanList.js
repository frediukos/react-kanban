import React, {useState} from 'react';
import KanbanListCard from "./KanbanListCard";

function KanbanList(props) {


  return (


      <div className="row">
        {
          props.statuses.map(el => (
            <div className="col-sm" key={el.id}>
              {el.name}

              <KanbanListCard status={el}
                              card={props.tasks}
              />

            </div>
          ))


        }
      </div>
  );
}

export default KanbanList;