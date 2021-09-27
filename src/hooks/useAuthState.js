import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../database/firebase";

const useAuthState = () => {
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setLoding(false);
        return setUser(true);
      }
      setLoding(false);
      setUser(false);
    });
  }, []);

  return { user, userData, loading };
};

export default useAuthState;
