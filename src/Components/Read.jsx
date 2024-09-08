// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, showUser } from "../Slices/userDetails";
// import UserModal from "./UserModal";
// import { Link } from "react-router-dom";
// const Read = () => {
//   const { user } = useSelector((state) => state.userDetails);
//   const [id, setId] = useState(null);
//   const [popup, setPopUp] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(showUser());
//   }, [dispatch]);

//   return (
//     <div>
//       {popup && <UserModal id={id} popup={popup} setPopup={setPopUp} />}

//       <h2>Read all Users</h2>
//       {user &&
//         user.map((data) => (
//           <div key={data.id} className="card w-50 mx-auto mb-3">
//             <div className="card-body">
//               <h5 className="card-title">{data.name}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">{data.email}</h6>
//               <h6 className="card-subtitle mb-2 text-muted">{data.gender}</h6>
//             </div>
//             <div className="d-flex justify-content-between p-3">
//               <button
//                 onClick={() => {
//                   setId(data.id);
//                   setPopUp(true);
//                 }}
//                 className="btn btn-info"
//               >
//                 View
//               </button>
//               <button
//                 onClick={() => setId(data.id)}
//                 className="btn btn-warning"
//               >
//                 Edit
//               </button>
//               <Link
//                 onClick={() => dispatch(deleteUser(data.id))}
//                 className="btn btn-danger"
//               >
//                 Delete
//               </Link>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Read;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../Slices/userDetails";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";

const Read = () => {
  const { user, error } = useSelector((state) => state.userDetails);
  const [id, setId] = useState(null);
  const [popup, setPopUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await dispatch(deleteUser(userId)).unwrap();
        // Optionally, you can add code here to remove the user from the UI manually if needed
      } catch (err) {
        console.error("Failed to delete user:", err);
      }
    }
  };

  console.log("Users:", user); // Log user data for debugging
  console.error("Error:", error); // Log any errors

  return (
    <div className="container mt-4">
      {popup && <UserModal id={id} popup={popup} setPopup={setPopUp} />}

      <h2 className="mb-4">Read All Users</h2>
      <div className="row">
        {user && user.length > 0 ? (
          user.map((data) => (
            <div key={data.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {data.email}
                  </h6>
                  <p className="card-text text-muted">Gender: {data.gender}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setId(data.id);
                      setPopUp(true);
                    }}
                    className="btn btn-info"
                  >
                    View
                  </button>
                  <Link
                  to={`/edit/${data.id}`}
                    onClick={() => setId(data.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    </div>
  );
};

export default Read;
