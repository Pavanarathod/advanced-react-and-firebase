import { useEffect, useState } from "react";
import { auth } from "./database/firebase";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import useAuthState from "./hooks/useAuthState";

function App() {
  const { user, loading } = useAuthState();

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {user ? <HomePage /> : <RegisterPage />}
    </div>
  );
}

export default App;
