import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from "./database/firebase";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      {user ? (
        <div>
          <Switch>
            <Route path="/update/:id" component={UpdatePage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      ) : (
        <div>
          <div>
            <Switch>
              <Route exact path="/" component={RegisterPage} />
            </Switch>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
