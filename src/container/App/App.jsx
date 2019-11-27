import React, { Component } from "react";
// import "./App.css";
import Login from "../Login";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList";

class App extends Component {
  state = {
    todos: [],
    todoToShow: "all"
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            //use 3 dots allows you to call all the same values and only update one of them
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = string => {
    this.setState({
      todoToShow: string
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  deleteCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
      <>
        {" "}
        <Login />
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <TodoList
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <section>
          Todo's left: {this.state.todos.filter(todo => !todo.complete).length}
        </section>
        <section>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </button>
        </section>
        {/* some will exit the array sooner than filter will. */}
        {this.state.todos.some(todo => todo.complete) ? (
          <section>
            <button onClick={this.deleteCompletedTodos}>
              Remove All Completed Todo's
            </button>
          </section>
        ) : null}
      </>
    );
  }
}

export default App;
