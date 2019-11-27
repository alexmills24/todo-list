import React from "react";

export default props => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "5px"
    }}
  >
    <li
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </li>
    <button
      style={{
        marginLeft: "5px"
      }}
      onClick={props.deleteTodo}
    >
      Delete
    </button>
  </section>
);
