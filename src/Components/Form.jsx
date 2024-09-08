import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../Slices/userDetails";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Male", // Default to Male
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getuserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER Data", user);
    dispatch(createUser(user));
    navigate("/read");
  };

  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={getuserData}
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
            onChange={getuserData}
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
            onChange={getuserData}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            onChange={getuserData}
            id="flexRadioMale"
            value="Male"
            checked={user.gender === "Male"}
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
            onChange={getuserData}
            id="flexRadioFemale"
            value="Female"
            checked={user.gender === "Female"}
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
  );
};

export default Form;
