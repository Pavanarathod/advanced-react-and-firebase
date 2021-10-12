import { useState, useEffect } from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { database } from "../database/firebase";

const useFirebaseSnapshot = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodo = async () => {
      try {
        setLoading(true);
        await onSnapshot(collection(database, "todos"), (snapshot) => {
          setTodo(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        alert(error.message);
      }
    };

    getTodo();

    return () => {
      setTodo([]);
      setLoading(false);
      setError(null);
    };
  }, []);

  return [todo, loading, error];
};

export default useFirebaseSnapshot;
