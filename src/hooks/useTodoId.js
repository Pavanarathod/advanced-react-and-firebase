import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../database/firebase";

const useTodoId = (id) => {
  const [docData, setDocData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const docRef = doc(database, "todos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLoading(false);
          const { todo } = docSnap.data();
          setDocData(todo);
        } else {
          setLoading(false);
          setDocData("Invalid doc id");
        }
      } catch (error) {
        console.log(error.messge);
      }
    };

    getData();
  }, [id]);

  return [docData, loading];
};

export default useTodoId;
