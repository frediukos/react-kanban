import React, {useState} from 'react';

function KanbanLists(props) {

  // const [listsComponent, setListsComponent] = useState([]);


  return (


      <div className="row">
        {
          props.statuses.map(el => (
            <div className="col-sm" key={el.id}>
              {el.name}

              


            </div>
          ))

        }
      </div>
  );
}

export default KanbanLists;