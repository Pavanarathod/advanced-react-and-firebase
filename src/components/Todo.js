import useFirebaseSnapshot from "../hooks/useFirebaseSnapshot";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, loading, error] = useFirebaseSnapshot();

  return (
    <div>
      {loading && <h1>loading</h1>}
      {error && <h1>{error}</h1>}

      {todo.length === 0 ? (
        <h1>Create new todo</h1>
      ) : (
        <>
          {todo.map(({ id, data: { todo } }) => (
            <TodoList key={id} id={id} todo={todo} />
          ))}
        </>
      )}
    </div>
  );
};

export default Todo;
