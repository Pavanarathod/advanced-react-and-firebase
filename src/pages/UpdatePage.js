import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../database/firebase";
import useTodoId from "../hooks/useTodoId";

const UpdatePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [docData, setDocData] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(database, "todos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const { todo } = docSnap.data();
          setDocData(todo);
        } else {
          setDocData("Invalid doc id");
        }
      } catch (error) {
        console.log(error.messge);
      }
    };

    getData();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(database, "todos", id), {
        todo: docData,
      });

      await history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Update: {docData}</h1>
      <form onSubmit={update}>
        <input
          type="text"
          value={docData}
          onChange={(e) => setDocData(e.target.value)}
        />
        <button>update</button>
      </form>
    </div>
  );
};

export default UpdatePage;
