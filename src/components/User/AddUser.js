import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import style from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter some value (non-empty)",
      });
    } else if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age cannot be less than 1",
      });
    } else {
      props.onAddUser(enteredName, enteredUserAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        ></ErrorModal>
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="Age">Age(Years)</label>
          <input id="Age" type="number" ref={ageInputRef} />
          <Button type="sumbit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
