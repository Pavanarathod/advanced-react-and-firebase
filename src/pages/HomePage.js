import { auth } from "../database/firebase";
import useAuthState from "../hooks/useAuthState";

const HomePage = () => {
  const { userData } = useAuthState();
  console.log(userData);

  return (
    <div>
      <h1>Homepage..</h1>
      <h1>Welcome : {userData?.email}</h1>

      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default HomePage;
