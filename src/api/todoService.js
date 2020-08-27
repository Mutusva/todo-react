import * as apiUtil from "./apiUtils";

export function getTodos() {
  return fetch(apiUtil.apiBaseUrl() + "getTodos")
    .then(apiUtil.handleResponse)
    .catch(apiUtil.handleError);
}

export function getTodoById(id) {
  return fetch(apiUtil.apiBaseUrl() + "getTodo/" + id)
    .then(apiUtil.handleResponse)
    .catch(apiUtil.handleError);
}

export function deleteTodo(id) {
    return fetch(apiUtil.apiBaseUrl() + "deleteTodo/" + id)
      .then(apiUtil.handleResponse)
      .catch(apiUtil.handleError);
  }

  export function AddNewTodo(todo) {
    return fetch(apiUtil.apiBaseUrl() + "addtodo",{
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(todo)
    })
      .then(apiUtil.handleResponse)
      .catch(apiUtil.handleError);
  }

export default { getTodos, getTodoById };