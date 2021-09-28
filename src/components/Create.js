import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { auth, database } from "../database/firebase";
import { todoAction } from "../features/todoSlice";

const Create = () => {
  const [user] = useAuthState(auth);
  const [todoData, setTodoData] = useState("");
  const dispatch = useDispatch();

  const createTodo = async (e) => {
    e.preventDefault();
    if (!todoData) return alert("Plese enter the todo...");
    try {
      await addDoc(collection(database, "todos"), {
        userName: user.displayName,
        userId: user.uid,
        todo: todoData,
      });
      setTodoData("");
      dispatch(todoAction.setTodo(todoData));
    } catch (error) {
      alert(`Error:  ${error.message} `);
    }
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default Create;
