import React, { useState } from "react";
import { AddUser } from "./components/user/AddUser";
import { UserList } from "./components/user/UserList";
import "./App.css";
const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  console.log("usersList: ", usersList);

  return (
    <div>
      <h2>Let's get started!</h2>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
