import useFireabseCollection from "../hooks/useFireabseCollection";
import { database } from "../database/firebase";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Todo = () => {
  const data = useSelector((state) => state.todoData);

  const [todo, loading, error] = useFireabseCollection(database, "todos", data);

  return (
    <div>
      {loading && <h1>loading</h1>}
      {error && <h1>{error}</h1>}

      {/* {todo.map(({ id, data: { todo } }) => (
  <TodoList key={id} id={id} todo={todo} />
))} 
       */}
    </div>
  );
};

export default Todo;
