import React from "react";

function Pop(props) {
  const { Title, Year, Type } = props.movie;
  const handleClose = () => {
    props.onClose();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-details">
          <h2>{Title}</h2>
          <p>Year of Publication: {Year}</p>
          <p>Type: {Type}</p>
        </div>
        <div className="button">
          {" "}
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Pop;
