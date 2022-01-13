import React, { useState } from "react";
import { Card } from "../ui/UserCard";
import { ErrorModal } from "../ui/ErrorModal";

import "./AddUser.css";
function AddUser(props) {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterUserAge, setEnterUserAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterUsername.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid age and name (non-empty values).",
      });
      return;
    }
    if (+enterUserAge < 1) {
      //console.log("enterUserAge: ", typeof enterUserAge);
      setError({
        title: "Invalid age",
        message: "Please enter valid age (< 0).",
      });
      return;
    }
    props.onAddUser(enterUsername, enterUserAge);

    setEnterUsername("");
    setEnterUserAge("");
  };
  console.log(" props.onAdduser: ", props);
  console.log("You clicked submit.", enterUsername, enterUserAge);

  const userNameHandler = (event) => {
    setEnterUsername(event.target.value);
    //console.log("setEnterUserName: ", event.target.value);
  };
  const userAgeHandler = (event) => {
    setEnterUserAge(event.target.value);
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorhandler}
        />
      )}

      <Card>
        <div className="expense-from adduser">
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input
              id="username"
              type="text"
              placeholder="UserName.."
              onChange={userNameHandler}
              value={enterUsername}
            />

            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Age.."
              onChange={userAgeHandler}
              value={enterUserAge}
            />

            <input type="submit" value="Submit" />
          </form>
          <br />
        </div>
      </Card>
    </div>
  );
}

export { AddUser };
