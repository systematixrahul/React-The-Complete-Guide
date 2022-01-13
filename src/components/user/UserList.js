import React, { useState } from "react";
import "./UserList.css";
function UserList(props) {
  return (
    <ul className="user-list">
      <li>Rahul</li>
      {props.users.map((user) => (
        <li>
          {user.name}({user.age} years old)
        </li>
      ))}
    </ul>
  );
}

export { UserList };
