import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from "./database/firebase";
import DevelopmentPage from "./pages/DevelopmentPage";
import HomePage from "./pages/HomePage";
import PavanPage from "./pages/PavanPage";
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
            <Route path="/register" component={DevelopmentPage} />
            <Route path="/pavan" component={PavanPage} />
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
