import { auth } from "../database/firebase";
// import useAuthState from "../hooks/useAuthState";
import { useAuthState } from "react-firebase-hooks/auth";
import Create from "../components/Create";
import Todo from "../components/Todo";

const HomePage = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Homepage..</h1>
      <h1>Welcome : {user?.email}</h1>
      <h1>{user?.displayName}</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <Create />
      <Todo />
    </div>
  );
};

export default HomePage;
