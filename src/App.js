import { auth } from "./database/firebase";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
// import useAuthState from "./hooks/useAuthState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { registerUser } from "./actions/userActions/userActions";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.user);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  // const { user, error, loading } = userInfo;

  // useEffect(() => {
  //   dispatch(registerUser());
  // }, [dispatch]);

  return <div>{user ? <h1>home</h1> : <RegisterPage />}</div>;
}

export default App;
