import { useHistory } from "react-router";
import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../database/firebase";
import { useDispatch } from "react-redux";
import { todoAction } from "../features/todoSlice";

const TodoList = ({ todo, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleted = async () => {
    try {
      await deleteDoc(doc(database, "todos", id));
      dispatch(todoAction.setTodo(id));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {todo ? (
        <h1
          style={{
            marginRight: "10px",
          }}
        >
          {todo}
        </h1>
      ) : (
        <h1>Create a new todo.</h1>
      )}

      <button onClick={() => history.push(`/update/${id}`)}>update</button>
      <button onClick={deleted}>delete</button>
    </div>
  );
};

export default TodoList;
