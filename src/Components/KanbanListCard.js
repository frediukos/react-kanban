import React, {useState} from 'react';

function KanbanListCard(props) {


  return (
    <div>
      <div className="card border-danger mb-3">
        <div className="card-header">{props.card.name}</div>
        <div className="card-body text-danger">
        <h5 className="card-title">{props.card.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
        </div>
        </div>



    </div>


  );
}

export default KanbanListCard;