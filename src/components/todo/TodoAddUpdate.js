import React from "react";
import TextInput from "../common/TextInput";

const TodoForm = ({
    Todo,
    onSubmit,
    saving,
    errors = {},
    onChange
}) => {
   

   return (
      <>
      <div className="login-container">
        <div className="center-form">
          <form id="login" onSubmit={onSubmit}>

            {errors.onSignUpError && (
              <div className="alert alert-danger" role="alert">
                {errors.onSignUpError}
              </div>
            )}

            <TextInput
              name="name"
              type="text"
              label="Todo Name"
              value={Todo.name}
              onChange={onChange}
              placeholder="Name"
              error={errors.description}
            />
            <TextInput
              name="description"
              type="text"
              label="Description"
              value={Todo.description}
              onChange={onChange}
              placeholder="Description"
              error={errors.description}
            />            

            <button type="submit" disabled={saving} className="btn btn-primary">
              {saving ? "Saving in..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
