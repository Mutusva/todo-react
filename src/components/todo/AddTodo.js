import React, { useState } from "react";
import TodoForm from "./TodoAddUpdate";
import { AddNewTodo, getTodoById } from "../../api/todoService";
import { useHistory } from "react-router-dom";

const AddTodo = () => {
  const history = useHistory(); 
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    create_date: new Date().toISOString().slice(0, 10),
  });

  const [errors, setErrors] = useState();
  const [saving, setSaving] = useState(false);

  function formIsValid() {
    const { name, description, create_date } = todo;

    const errors = {};

    if (!name) errors.name = "FName is required.";
    if (!description) errors.description = "Description is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTodo((todo) => ({
      ...todo,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    AddNewTodo(todo).then(item => {
        history.push("/");
    }).catch(err => {
       console.log(err);
    });
  }

  return (
    <>
      <TodoForm
        Todo={todo}
        onChange={handleChange}
        saving={saving}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default AddTodo;
