import React, {useState} from 'react';
import KanbanListCard from "./KanbanListCard";
import KanbanCreateTaskForm from "./KanbanCreateTaskForm";

function KanbanList(props) {

  const [cardPriority, setCardPriority] = useState({});


  return (


    <div className="row">
      {
        props.statuses.map(stat => (
          <div className="col-sm" key={stat.id.toString()}>
            <div>
              <h4>
                <span>{stat.name}</span>
              </h4>
            </div>

            <div>
              {
                props.tasks
                  .filter(task => (task.id === stat.id))
                  .sort((a, b) => a.priority - b.priority, 0)
                  .map(task => (
                    <KanbanListCard key={task.name}
                                    status={stat}
                                    task={task}
                                    priority={props.priorities}
                    />
                  ))
              }
            </div>


          </div>
        ))


      }
    </div>
  );
}

export default KanbanList;