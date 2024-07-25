import React from "react";
import { User } from "../types";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
