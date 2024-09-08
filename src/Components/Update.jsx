import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Update = () => {
  const { id } = useParams;
  const { allUser, loading } = useSelector((state) => state.userDetails.user);
  useEffect(() => {
    if (id) {
      const singleUser = allUser.find((data) => data.id === id);
    }
  });
  return (
    <div>
      <h1>Edit the Data</h1>
      <div className="w-50 mx-auto">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="exampleInputName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputAge"
              name="age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioMale"
              value="Male"
              //   checked={user.gender === "Male"}
            />
            <label className="form-check-label" htmlFor="flexRadioMale">
              Male
            </label>
          </div>
          <div className="mb-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioFemale"
              value="Female"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioFemale">
              Female
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
