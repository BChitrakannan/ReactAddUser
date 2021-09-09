import React from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul className={style.ul}>
        {props.users.map((user) => (
          <li id={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
