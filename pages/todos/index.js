import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      {todos.length ? (
        todos.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}

export default Todos;
