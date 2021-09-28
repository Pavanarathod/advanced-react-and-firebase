import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../database/firebase";

const useFireabseCollection = (databaseName, collectionName, listener) => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (data) => {
      try {
        setLoading(true);
        const todos = await getDocs(collection(databaseName, collectionName));
        setTodo(
          todos.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [databaseName, collectionName, listener]);

  return [todo, loading, error];
};

export default useFireabseCollection;
