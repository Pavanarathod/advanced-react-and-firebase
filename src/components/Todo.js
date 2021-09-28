import useFireabseCollection from "../hooks/useFireabseCollection";
import { database } from "../database/firebase";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const data = useSelector((state) => state.todoData);

  const [todo, loading, error] = useFireabseCollection(database, "todos", data);

  return (
    <div>
      {loading && <h1>loading</h1>}
      {error && <h1>{error}</h1>}
      {todo.map((t) => (
        <div key={t.id}>
          <h1>{t.data.todo}</h1>
        </div>
      ))}
    </div>
  );
};

export default Todo;
