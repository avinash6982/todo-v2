import { useState } from "react";
import CompletedTodos from "./components/CompletedTodos";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {

  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])

  const updateTodos = value =>
    setTodos(previousState => ([
      ...previousState,
      ...value
    ]))

  const updateCompleted = value =>
    setCompleted(previousState => ([
      ...previousState,
      ...value
    ]))

  const completeTodoHandler = key => {

    updateCompleted(todos.filter((item, id) => id === key))
    setTodos(todos.filter((item, id) => id !== key))
  }

  const revertCompleted = key => {

    updateTodos(completed.filter((item, id) => id === key))
    setCompleted(completed.filter((item, id) => id !== key))
  }

  return (
    <div className="App" style={{ height: '100vh', overflow: "hidden" }}>
      <div className="row p-4" style={{ height: '100%' }}>
        <div className="col-md-6" style={{ display: 'flex', flexDirection: "column" }}>
          <div className="row p-1">
            <CreateTodo addTodo={updateTodos} />
          </div>
          <div className="row p-1" style={{ flex: 1 }}>
            <Todos todos={todos} markAsCompleted={completeTodoHandler} />
          </div>
        </div>
        <div className="col-md-6 p-1">
          <CompletedTodos items={completed} markAsTodo={revertCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;
