import { auth } from "../database/firebase";
// import useAuthState from "../hooks/useAuthState";
import { useAuthState } from "react-firebase-hooks/auth";

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log("homepage running");
  console.log(user);

  return (
    <div>
      <h1>Homepage..</h1>
      <h1>Welcome : {user?.email}</h1>
      <h1>{user?.displayName}</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default HomePage;
