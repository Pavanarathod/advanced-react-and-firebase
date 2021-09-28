import { doc, onSnapshot } from "firebase/firestore";
import { database } from "../database/firebase";
import { useEffect, useState } from "react";

const useRealTime = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const col = onSnapshot(doc(database, "todos"), (doc) => {});
  }, []);
};

export default useRealTime;
