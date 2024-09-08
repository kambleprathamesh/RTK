

import React from "react";
import { useSelector } from "react-redux";

const UserModal = ({ id, setPopup }) => {
  const allUser = useSelector((state) => state.userDetails.user);
  const singleUser = allUser.find((data) => data.id === id);

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">User Details</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => setPopup(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h5 className="font-weight-bold">{singleUser?.name}</h5>
            <p>Email: {singleUser?.email}</p>
            <p>Age: {singleUser?.age}</p>
            <p>Gender: {singleUser?.gender}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
