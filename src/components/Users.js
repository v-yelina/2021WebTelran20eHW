import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";
const Users = () => {
  const { users, changeActiveUser, activeUser } = useContext(GlobalContext);
  return users.map((user) => (
    <h4
      style={{ cursor: "pointer" }}
      className={
        activeUser && activeUser.id === user.id
          ? "list-group-item list-group-item-success"
          : "list-group-item"
      }
      key={user.id}
      onClick={() => {
        changeActiveUser(user.id);
      }}
    >
      {user.name}
    </h4>
  ));
};

export default Users;
