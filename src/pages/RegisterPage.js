import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../database/firebase";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = async (e) => {
    try {
      signInWithPopup(auth, provider).then((newUser) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(newUser);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = newUser.user;
      });
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign up</button>
      </form>
      <h1>Sign ing google</h1>
      <button onClick={signInWithGoogle}>sign in google</button>
    </div>
  );
};

export default RegisterPage;
