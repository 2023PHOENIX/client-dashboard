import React from "react";

const DetailViewModal = ({ rowData, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {Object.keys(rowData).map((key) => (
          <p key={key}>
            <strong>{key}:</strong> {rowData[key]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DetailViewModal;
